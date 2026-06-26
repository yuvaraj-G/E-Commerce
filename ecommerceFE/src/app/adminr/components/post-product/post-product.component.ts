import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-post-product',
  templateUrl: './post-product.component.html',
  styleUrls: ['./post-product.component.scss']
})
export class PostProductComponent implements OnInit {
  productForm!: FormGroup;
  listOfCategories: any[] = [];
  selectedFile: File | null = null;
  imagePreview: string | ArrayBuffer | null = null;
  constructor(private adminService: AdminService, private fb: FormBuilder, private router: Router, private matSnackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: [null, [Validators.required]],
      description: [null, [Validators.required]],
      price: [null, [Validators.required, Validators.min(0)]],
      categoryId: [null, [Validators.required]]
    });
    this.getAllCategories();
  }
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.previewImage();
  }

  previewImage() {
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }
  
  getAllCategories() {
    this.adminService.getAllCategories().subscribe(
      (res: any) => {
        this.listOfCategories = res;
      },
      (error: any) => {
        console.error('Error fetching categories:', error);
        this.matSnackBar.open('Error fetching categories', 'Close', {
          duration: 3000,
          panelClass: ['error-snackbar']
        });
      }
    );
  }
  addProduct() {
    if (this.productForm.valid) {
      const productData = this.productForm.value;
      const formData = new FormData();
      formData.append('name', productData.name);
      formData.append('description', productData.description);
      formData.append('price', productData.price);
      formData.append('categoryId', productData.categoryId);
      if (this.selectedFile) {
        formData.append('img', this.selectedFile);
      }
      
      this.adminService.addProduct(formData).subscribe(
        (res: any) => {
          this.matSnackBar.open('Product added successfully', 'Close', {
            duration: 3000,
            panelClass: ['success-snackbar']
          });
          this.router.navigate(['/admin/dashboard']);
        },
        (error: any) => {
          console.error('Error adding product:', error);
          this.matSnackBar.open('Error adding product', 'Close', {
            duration: 3000,
            panelClass: ['error-snackbar']
          });
        }
      );
    } else {
      for (const control in this.productForm.controls) {
        this.productForm.controls[control].markAsDirty();
        this.productForm.controls[control].updateValueAndValidity();
      }
    }
  }
}
