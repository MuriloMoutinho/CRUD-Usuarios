package com.apollus.login.mapper;

import com.apollus.login.dto.auth.LoginResponse;
import lombok.experimental.UtilityClass;

@UtilityClass
public class LoginMapper {

    public static LoginResponse ToReponse(String token){
        return LoginResponse.builder()
                .token(token)
                .build();
    }
}
