package com.example.ecommerceApp.repository;


import com.example.ecommerceApp.entity.User;
import com.example.ecommerceApp.enums.userRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findFirstByEmail(String email);

    User findByRole(userRole userRole);
}
