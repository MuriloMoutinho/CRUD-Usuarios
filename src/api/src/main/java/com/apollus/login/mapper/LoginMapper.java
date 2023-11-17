package com.apollus.login.mapper;

import com.apollus.login.dto.auth.LoginResponse;
import com.apollus.login.security.domain.User;
import lombok.experimental.UtilityClass;

@UtilityClass
public class LoginMapper {

    public static LoginResponse ToReponse(User user, String token){
        return LoginResponse.builder()
                .role(user.getRole())
                .token(token)
                .build();
    }
}
