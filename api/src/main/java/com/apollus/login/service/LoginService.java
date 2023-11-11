package com.apollus.login.service;

import com.apollus.login.dto.auth.LoginRequest;
import com.apollus.login.dto.auth.LoginResponse;
import com.apollus.login.mapper.LoginMapper;
import com.apollus.login.mapper.UserSecurityMapper;
import com.apollus.login.security.config.user.UserSecurity;
import com.apollus.login.security.domain.User;
import com.apollus.login.security.service.TokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;

@Service
public class LoginService {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private TokenService tokenService;

    public LoginResponse login(LoginRequest request) {
        UsernamePasswordAuthenticationToken user
                = new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword());
        var auth = authenticationManager.authenticate(user);

        User userLogged = UserSecurityMapper.toUser((UserSecurity) auth.getPrincipal());
        String token = tokenService.generateToken(userLogged);
        return LoginMapper.ToReponse(token);
    }
}
