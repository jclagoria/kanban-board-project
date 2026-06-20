package com.kanban.infrastructure.security.password;

import org.jspecify.annotations.NullMarked;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Mono;

import java.util.Set;

@NullMarked
@Component
public class CommonPasswordChecker implements com.kanban.core.port.output.CommonPasswordChecker {

    @Override
    public Mono<Boolean> isCommon(String password) {
        return Mono.fromCallable(() -> COMMON_PASSWORDS.contains(password.toLowerCase()));
    }

    private static final Set<String> COMMON_PASSWORDS = Set.of(
        "password", "123456", "12345678", "qwerty", "abc123", "monkey", "1234567",
        "letmein", "trustno1", "dragon", "baseball", "iloveyou", "master", "sunshine",
        "welcome", "shadow", "ashley", "football", "jesus", "michael", "ninja", "mustang",
        "password1", "admin", "123456789", "1234567890", "123123", "654321", "superman",
        "qazwsx", "maggie", "rush2112", "tigger", "charlie", "robert", "thomas", "jennifer",
        "jordan", "hunter", "buster", "soccer", "batman", "andrew", "access", "flower",
        "hottie", "loveme", "alexis", "111111", "password123", "unknown", "bypass",
        "corvette", "butthead", "444444", "qwerty123", "harley", "cheese", "joshua",
        "matthew", "ginger", "passion", "passwd", "princess", "steelers", "nicole",
        "arsenal", "samuel", "william", "joseph", "daniel",
        "chocolate", "pepper", "michigan", "cowboys", "yankees", "liverpool", "chelsea",
        "redskins", "packers", "broncos", "eagles", "vikings", "patriots",
        "rangers", "canada", "america", "russia", "germany", "france", "italy", "spain",
        "brazil", "argentina", "australia", "japan", "china", "korea", "mexico", "israel",
        "swordfish", "passw0rd", "p@ssword", "p@$$word", "changeme", "secret", "summer",
        "winter", "spring", "autumn", "october", "november", "december", "january",
        "february", "march", "april", "mayfield", "junior", "july", "august", "september"
    );
}
