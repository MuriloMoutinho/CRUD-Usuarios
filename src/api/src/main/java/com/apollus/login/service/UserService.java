package com.apollus.login.service;

import com.apollus.login.dto.user.EditUserPasswordRequest;
import com.apollus.login.dto.user.UserRequest;
import com.apollus.login.dto.user.UserResponse;
import com.apollus.login.mapper.UserMapper;
import com.apollus.login.security.domain.User;
import com.apollus.login.security.repository.UserRepository;
import com.apollus.login.security.service.AuthenticatedUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import static org.springframework.http.HttpStatus.UNPROCESSABLE_ENTITY;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AuthenticatedUserService authenticatedUserService;

    public Page<UserResponse> getUsers(String email, Pageable pageable){
        return userRepository.findAllByEmail(email, pageable)
                .map(UserMapper::ToReponse);
    }

    public UserResponse getLoggedProfile() {
        User loggedUser = authenticatedUserService.getUser();
        return UserMapper.ToReponse(loggedUser);
    }

    @Transactional
    public UserResponse editPassword(EditUserPasswordRequest request) {
        User loggedUser = authenticatedUserService.getUser();

        boolean isPasswordCorret = new BCryptPasswordEncoder()
                .matches(request.getOldPassword(), loggedUser.getPassword());

        if(!isPasswordCorret){
            throw new ResponseStatusException(UNPROCESSABLE_ENTITY, "Sua senha atual está incorreta");
        }

        String encryptedPassword = new BCryptPasswordEncoder().encode(request.getNewPassword());
        loggedUser.setPassword(encryptedPassword);

        userRepository.save(loggedUser);
        return UserMapper.ToReponse(loggedUser);
    }

    @Transactional
    public UserResponse postUser(UserRequest request) {
        boolean isEmailExists = userRepository.existsByEmail(request.getEmail());
        if(isEmailExists){
            throw new ResponseStatusException(UNPROCESSABLE_ENTITY, "Este email já está em uso");
        }

        User newUser = UserMapper.toUser(request);

        String encryptedPassword = new BCryptPasswordEncoder().encode(newUser.getPassword());
        newUser.setPassword(encryptedPassword);

        userRepository.save(newUser);
        return UserMapper.ToReponse(newUser);
    }
}
