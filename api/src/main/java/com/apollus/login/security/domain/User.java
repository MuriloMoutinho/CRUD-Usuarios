package com.apollus.login.security.domain;

import jakarta.persistence.*;
import lombok.*;

import static jakarta.persistence.EnumType.STRING;
import static jakarta.persistence.GenerationType.IDENTITY;

@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class User {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Integer id;
    @Column(unique = true)
    private String email;
    private String password;

    @Enumerated(STRING)
    private UserRole role;

}
