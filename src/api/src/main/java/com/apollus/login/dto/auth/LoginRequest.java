package com.apollus.login.dto.auth;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginRequest {
    @NotBlank(message = "O email deve ser preenchido")
    @Size(max = 256)
    private String email;
    @NotBlank(message = "A senha não deve ser preenchida")
    private String password;
}
