package com.apollus.login.security.config.user;

import com.apollus.login.security.domain.User;
import com.apollus.login.security.domain.UserRole;
import lombok.Getter;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.List;

@Getter
public class UserSecurity implements UserDetails {

    private final Integer id;
    private final String username;
    private final String password;
    private final UserRole role;
    private final List<SimpleGrantedAuthority> authorities;

    private final boolean accountNonExpired;
    private final boolean accountNonLocked;
    private final boolean credentialsNonExpired;
    private final boolean enabled;

    public UserSecurity(User user) {

        this.id = user.getId();
        this.username = user.getEmail();
        this.password = user.getPassword();
        this.role = user.getRole();

        this.accountNonExpired = true;
        this.accountNonLocked = true;
        this.credentialsNonExpired = true;
        this.enabled = true;

        this.authorities = new ArrayList<>();
        if(user.getRole() == UserRole.USER){
            this.authorities.add(new SimpleGrantedAuthority("ROLE_USER"));
        }
        else if(user.getRole() == UserRole.ADMIN){
            this.authorities.add(new SimpleGrantedAuthority("ROLE_ADMIN"));
        }

    }
}