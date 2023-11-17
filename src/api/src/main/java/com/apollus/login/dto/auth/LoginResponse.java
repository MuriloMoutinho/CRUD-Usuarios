package com.apollus.login.dto.auth;

import com.apollus.login.security.domain.UserRole;
import lombok.*;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class LoginResponse {
    private UserRole role;
    private String token;
}
