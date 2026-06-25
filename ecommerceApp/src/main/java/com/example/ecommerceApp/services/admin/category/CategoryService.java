package com.example.ecommerceApp.services.admin.category;

import com.example.ecommerceApp.dto.CategoryDto;
import com.example.ecommerceApp.entity.Category;

import java.util.List;

public interface CategoryService {
    public Category createCategory(CategoryDto categoryDto);
    public List<Category> getAllCategory();
}
