package com.apollus.login.dto.user;

import com.apollus.login.security.domain.UserRole;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.NonNull;

@Getter
public class EditUserRequest {
    @NotBlank(message = "O email deve ser preenchido")
    @Size(max = 256)
    private String email;
    private String password;
    @NotNull(message = "O cargo deve ser preenchido")
    private UserRole role;
}
