package com.apollus.login.dto.user;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;

@Getter
public class EditUserPasswordRequest {
    @NotBlank
    private String oldPassword;

    @NotBlank
    private String newPassword;
}
