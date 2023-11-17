package com.apollus.login.dto.user;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;

@Getter
public class EditUserPasswordRequest {
    @NotBlank(message = "A antiga senha deve ser preenchida")
    private String oldPassword;

    @NotBlank(message = "A nova senha ser preenchida")
    private String newPassword;
}
