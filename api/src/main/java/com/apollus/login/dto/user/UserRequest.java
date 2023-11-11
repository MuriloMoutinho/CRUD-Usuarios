package com.apollus.login.dto.user;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;

@Getter
public class UserRequest {

    @NotBlank
    @Size(max = 256)
    private String email;
    @NotBlank
    private String password;
    @NotBlank
    private String role;
}
