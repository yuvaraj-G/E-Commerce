package com.example.ecommerceApp.services.admin.category;

import com.example.ecommerceApp.dto.CatergoryDto;
import com.example.ecommerceApp.entity.Category;
import com.example.ecommerceApp.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    public Category createCategory(CatergoryDto catergoryDto) {
        Category category = new Category();
        category.setName(catergoryDto.getName());
        category.setDescription(catergoryDto.getDescription());

        return categoryRepository.save(category);
    }

    public List<Category> getAllCategory() {
        return categoryRepository.findAll();
    }
}
