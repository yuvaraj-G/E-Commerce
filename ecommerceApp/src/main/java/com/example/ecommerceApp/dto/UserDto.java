package com.example.ecommerceApp.dto;

import com.example.ecommerceApp.enums.userRole;
import lombok.Data;

@Data
public class UserDto {
    private Long id;
    private String email;
    private String name;
    private userRole userRole;
}
