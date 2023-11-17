package com.apollus.login.dto.user;

import lombok.*;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserResponse {
    private Integer id;
    private String email;
    private String role;
}

