package com.apollus.login.service;

import com.apollus.login.dto.user.EditUserPasswordRequest;
import com.apollus.login.dto.user.EditUserRequest;
import com.apollus.login.dto.user.UserRequest;
import com.apollus.login.dto.user.UserResponse;
import com.apollus.login.mapper.UserMapper;
import com.apollus.login.security.domain.User;
import com.apollus.login.security.repository.UserRepository;
import com.apollus.login.security.service.AuthenticatedUserService;
import com.apollus.login.service.core.ValidEmailService;
import com.apollus.login.service.core.GetUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.util.Objects;

import static org.springframework.http.HttpStatus.UNPROCESSABLE_ENTITY;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AuthenticatedUserService authenticatedUserService;

    @Autowired
    private ValidEmailService validEmailService;

    @Autowired
    private GetUserService getUserService;

    public Page<UserResponse> getUsers(String email, Pageable pageable){
        Integer idLoggedUser = authenticatedUserService.getIdUser();

        return userRepository.findAllOthersUsersByEmail(email, idLoggedUser,  pageable)
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
        validEmailService.isValid(request.getEmail());

        User newUser = UserMapper.toUser(request);

        String encryptedPassword = new BCryptPasswordEncoder().encode(newUser.getPassword());
        newUser.setPassword(encryptedPassword);

        userRepository.save(newUser);
        return UserMapper.ToReponse(newUser);
    }

    @Transactional
    public UserResponse editUser(Integer id, EditUserRequest request) {
        User user = getUserService.getById(id);
        validEmailService.isValid(request.getEmail());

        user.setEmail(request.getEmail());
        user.setRole(request.getRole());

        if(Objects.nonNull(request.getPassword())){
            String encryptedPassword = new BCryptPasswordEncoder().encode(request.getPassword());
            user.setPassword(encryptedPassword);
        }

        userRepository.save(user);
        return UserMapper.ToReponse(user);

    }

    public boolean checkUserLogged() {
        Integer loggedUserId = authenticatedUserService.getIdUser();
        return Objects.nonNull(loggedUserId);
    }

    @Transactional
    public void deleteUser(Integer id) {
        User user = getUserService.getById(id);
        userRepository.delete(user);
    }
}
