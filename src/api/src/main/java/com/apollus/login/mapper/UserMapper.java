package com.apollus.login.mapper;

import com.apollus.login.dto.user.EditUserRequest;
import com.apollus.login.dto.user.UserRequest;
import com.apollus.login.dto.user.UserResponse;
import com.apollus.login.security.domain.User;
import com.apollus.login.security.domain.UserRole;
import lombok.experimental.UtilityClass;

@UtilityClass
public class UserMapper {

    public static User toUser(UserRequest request){
        return User.builder()
                .email(request.getEmail())
                .password(request.getPassword())
                .role(request.getRole())
                .build();
    }

    public static UserResponse ToReponse(User user){
        return UserResponse.builder()
                .id(user.getId())
                .email(user.getEmail())
                .role(user.getRole().getRoleName())
                .build();
    }
}
