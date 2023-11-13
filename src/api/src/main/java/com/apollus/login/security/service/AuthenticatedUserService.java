package com.apollus.login.security.service;

import com.apollus.login.security.config.user.UserSecurity;
import com.apollus.login.security.domain.User;
import com.apollus.login.security.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import static java.util.Objects.isNull;

@Service
public class AuthenticatedUserService {

    @Autowired
    private UserRepository userRepository;

    public Integer getIdUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        Object user = authentication.getPrincipal();

        if (user instanceof UserSecurity) {
            return ((UserSecurity) user).getId();
        }

        return null;
    }

    public User getUser() {
        Integer id = getIdUser();

        if (isNull(id)) {
            return null;
        }

        return userRepository.findById(id).orElse(null);
    }
}