package com.apollus.login.security.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum UserRole {

    USER(Name.USER),
    ADMIN(Name.ADMIN);

    public static class Name {
        public static final String USER = "USER";
        public static final String ADMIN = "ADMIN";
    }

    private final String roleName;
}
