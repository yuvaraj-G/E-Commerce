package com.example.ecommerceApp.repository;

import com.example.ecommerceApp.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
