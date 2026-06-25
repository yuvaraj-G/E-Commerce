package com.example.ecommerceApp.dto;

import jakarta.persistence.Lob;
import lombok.Data;

@Data
public class CatergoryDto {
    private String name;
    @Lob
    private String description;
}
