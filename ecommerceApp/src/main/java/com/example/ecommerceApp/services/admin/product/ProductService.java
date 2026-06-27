package com.example.ecommerceApp.services.admin.product;

import com.example.ecommerceApp.dto.ProductDto;

import java.io.IOException;
import java.util.List;

public interface ProductService {
    public ProductDto addProduct(ProductDto productDto) throws IOException;
    public List<ProductDto> getAllProducts();
    public List<ProductDto> findAllProductByname(String name);
    public Boolean deleteProduct(Long id);
}
