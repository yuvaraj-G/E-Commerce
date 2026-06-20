package com.example.ecommerceApp.entity;

import com.example.ecommerceApp.enums.userRole;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private String email;
    private String password;
    @Enumerated(EnumType.STRING)
    private userRole role;
    @Lob // we can store the large data
    private byte[] img;
}
