package com.apollus.login.security.repository;

import com.apollus.login.security.domain.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {

    Optional<User> findByEmail(String email);

    @Query("SELECT u FROM User u WHERE LOWER(u.email) = LOWER(CONCAT('%', :userEmail, '%'))")
    Page<User> findAllByEmail(@Param("userEmail") String email, Pageable pageable);

    boolean existsByEmail(String email);
}
