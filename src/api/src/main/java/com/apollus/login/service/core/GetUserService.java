package com.apollus.login.service.core;

import com.apollus.login.security.domain.User;
import com.apollus.login.security.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import static org.springframework.http.HttpStatus.NOT_FOUND;

@Service
public class GetUserService {

    @Autowired
    private UserRepository userRepository;

    public User getById(Integer id){
        return userRepository
                .findById(id)
                .orElseThrow(() -> new ResponseStatusException(NOT_FOUND, "Usuário não encontrado"));
    }
}

