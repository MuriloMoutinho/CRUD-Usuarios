package com.apollus.login.service.core;

import com.apollus.login.security.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import static org.springframework.http.HttpStatus.UNPROCESSABLE_ENTITY;

@Service
public class ValidEmailService {

    @Autowired
    private UserRepository userRepository;

    public void isValid(String email){
        boolean isEmailExists = userRepository.existsByEmail(email);
        if(isEmailExists){
            throw new ResponseStatusException(UNPROCESSABLE_ENTITY, "Este email já está em uso");
        }
    }

}
