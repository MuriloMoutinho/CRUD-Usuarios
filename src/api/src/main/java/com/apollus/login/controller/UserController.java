package com.apollus.login.controller;

import com.apollus.login.dto.user.EditUserPasswordRequest;
import com.apollus.login.dto.user.EditUserRequest;
import com.apollus.login.dto.user.UserRequest;
import com.apollus.login.dto.user.UserResponse;
import com.apollus.login.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("v1/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/list")
    public Page<UserResponse> getUsers(
            @RequestParam(required = false, defaultValue = "") String email,
            Pageable pageable
    ){
        return userService.getUsers(email, pageable);
    }

    @GetMapping
    public UserResponse getLoggedProfile(){
        return userService.getLoggedProfile();
    }

    @GetMapping("/check")
    public boolean checkUserLogged(){
        return userService.checkUserLogged();
    }

    @PostMapping
    public UserResponse postUser(@RequestBody @Valid UserRequest request){
        return userService.postUser(request);
    }

    @PatchMapping("/{id}")
    public UserResponse editUser(@PathVariable Integer id, @RequestBody @Valid EditUserRequest request){
        return userService.editUser(id, request);
    }

    @PatchMapping
    public UserResponse editPassword(@RequestBody @Valid EditUserPasswordRequest request){
        return userService.editPassword(request);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteUser(@PathVariable Integer id){
        userService.deleteUser(id);
    }
}
