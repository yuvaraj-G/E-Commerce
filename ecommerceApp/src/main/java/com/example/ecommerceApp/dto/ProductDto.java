package com.example.ecommerceApp.dto;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
public class ProductDto {
    private long id;
    private String name;
    private long price;
    private String description;
    private byte[] byteImg;
    private long categoryId;
    private String categoryName;
    private MultipartFile img;
}
