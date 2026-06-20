package com.kanban.infrastructure.security.password;

import com.google.common.base.Charsets;
import com.google.common.hash.BloomFilter;
import com.google.common.hash.Funnels;
import org.jspecify.annotations.NullMarked;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Mono;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.zip.GZIPInputStream;

@NullMarked
@Component
public class CommonPasswordChecker implements com.kanban.core.port.output.CommonPasswordChecker {

    private static final Logger log = LoggerFactory.getLogger(CommonPasswordChecker.class);
    private static final int EXPECTED_INSERTIONS = 10_000;
    private static final double FPP = 0.01;
    private static final String BUNDLED_PATH = "/common-passwords.txt.gz";
    private static final String OVERRIDE_PROP = "common-passwords";
    private static final String OVERRIDE_ENV = "KANBAN_COMMON_PASSWORDS";

    private static final List<String> FALLBACK = List.of(
            "password", "123456", "12345678", "qwerty", "abc123", "monkey", "1234567",
            "letmein", "trustno1", "dragon", "baseball", "iloveyou", "master", "sunshine",
            "welcome", "shadow", "ashley", "football", "jesus", "michael", "ninja", "mustang",
            "password1", "admin", "123456789", "1234567890", "123123", "654321", "superman",
            "qazwsx", "maggie", "rush2112", "tigger", "charlie", "robert", "thomas", "jennifer",
            "jordan", "hunter", "buster", "soccer", "batman", "andrew", "access", "flower",
            "hottie", "loveme", "alexis", "111111", "password123", "unknown", "bypass",
            "corvette", "passion", "princess"
    );

    private final BloomFilter<CharSequence> bloomFilter;

    public CommonPasswordChecker() {
        this.bloomFilter = loadBloomFilter();
    }

    @Override
    public Mono<Boolean> isCommon(String password) {
        return Mono.fromCallable(() -> bloomFilter.mightContain(password.toLowerCase()));
    }

    private static BloomFilter<CharSequence> loadBloomFilter() {
        var filter = BloomFilter.create(
                Funnels.stringFunnel(Charsets.UTF_8),
                EXPECTED_INSERTIONS,
                FPP
        );
        if (tryLoadExternal(filter) || tryLoadBundled(filter)) {
            return filter;
        }
        log.warn("No wordlist found anywhere, using built-in fallback with {} entries", FALLBACK.size());
        FALLBACK.forEach(word -> filter.put(word.toLowerCase()));
        return filter;
    }

    private static boolean tryLoadExternal(BloomFilter<CharSequence> filter) {
        var path = resolveExternalPath();
        if (path == null) return false;
        if (!Files.exists(path)) {
            log.warn("External wordlist configured but not found: {}", path);
            return false;
        }
        log.info("Loading external wordlist from: {}", path);
        return loadFromStream(filter, () -> new GZIPInputStream(new FileInputStream(path.toFile())));
    }

    private static Path resolveExternalPath() {
        var prop = System.getProperty(OVERRIDE_PROP);
        if (prop != null && !prop.isBlank()) return Path.of(prop);
        var env = System.getenv(OVERRIDE_ENV);
        if (env != null && !env.isBlank()) return Path.of(env);
        return null;
    }

    private static boolean tryLoadBundled(BloomFilter<CharSequence> filter) {
        log.info("Loading bundled wordlist from: {}", BUNDLED_PATH);
        return loadFromStream(filter, () -> {
            var stream = CommonPasswordChecker.class.getResourceAsStream(BUNDLED_PATH);
            if (stream == null) {
                log.warn("Bundled wordlist not found in classpath: {}", BUNDLED_PATH);
                return null;
            }
            return new GZIPInputStream(stream);
        });
    }

    private static boolean loadFromStream(BloomFilter<CharSequence> filter, StreamSupplier supplier) {
        try (var gz = supplier.open()) {
            if (gz == null) return false;
            var reader = new BufferedReader(new InputStreamReader(gz, Charsets.UTF_8));
            int count = 0;
            String line;
            while ((line = reader.readLine()) != null) {
                var trimmed = line.trim();
                if (!trimmed.isEmpty()) {
                    filter.put(trimmed.toLowerCase());
                    count++;
                }
            }
            log.info("Loaded {} common passwords into Bloom Filter (expected: {}, FPP: {})",
                    count, EXPECTED_INSERTIONS, FPP);
            return count > 0;
        } catch (IOException e) {
            log.error("Failed to read common passwords wordlist: {}", e.getMessage());
            return false;
        }
    }

    @FunctionalInterface
    private interface StreamSupplier {
        InputStream open() throws IOException;
    }
}
