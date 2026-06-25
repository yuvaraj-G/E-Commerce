package com.example.ecommerceApp.controller.admin;

import com.example.ecommerceApp.dto.ProductDto;
import com.example.ecommerceApp.services.admin.product.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("api/admin")
@RequiredArgsConstructor
public class AdminProductController {
    private final ProductService productService;

    @PostMapping("product")
    public ResponseEntity<ProductDto> addProduct(@RequestBody ProductDto productDto) throws IOException {
        ProductDto productDto111 = productService.addProduct(productDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(productDto111);
    }

    @GetMapping("products")
    public ResponseEntity<List<ProductDto>> getAllProducts() {
        List<ProductDto> productDto = productService.getAllProducts();
        return ResponseEntity.ok(productDto);
    }
}
