package com.example.ecommerceApp.services.admin.category;

import com.example.ecommerceApp.dto.CatergoryDto;
import com.example.ecommerceApp.entity.Category;

import java.util.List;

public interface CategoryService {
    public Category createCategory(CatergoryDto catergoryDto);
    public List<Category> getAllCategory();
}
