package com.example.ecommerceApp.services.auth;

import com.example.ecommerceApp.dto.SignUpRequest;
import com.example.ecommerceApp.dto.UserDto;

public interface AuthService {

    UserDto createUser(SignUpRequest signUpRequest);
    Boolean hasUserWithEmail(String email);
}
