package com.apollus.login.mapper;

import com.apollus.login.security.config.user.UserSecurity;
import com.apollus.login.security.domain.User;
import lombok.experimental.UtilityClass;

@UtilityClass
public class UserSecurityMapper {

    public static User toUser(UserSecurity userSecurity){
        return User.builder()
                .id(userSecurity.getId())
                .email(userSecurity.getUsername())
                .role(userSecurity.getRole())
                .build();
    }

}
