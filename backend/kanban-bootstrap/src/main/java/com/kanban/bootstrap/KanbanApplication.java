package com.kanban.bootstrap;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = {
    "com.kanban.interfaces",
    "com.kanban.infrastructure",
    "com.kanban.application",
    "com.kanban.bootstrap"
})
public class KanbanApplication {

    public static void main(String[] args) {
        SpringApplication.run(KanbanApplication.class, args);
    }
}
