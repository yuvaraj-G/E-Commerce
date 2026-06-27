package com.example.ecommerceApp.repository;

import com.example.ecommerceApp.dto.ProductDto;
import com.example.ecommerceApp.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findAllByNameContaining(String title);
}
