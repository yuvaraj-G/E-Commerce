import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  products: any[] = [];
  searchProductForm!: FormGroup;

  constructor(private adminService: AdminService, private fb: FormBuilder, private matSnackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getAllProducts();
    this.searchProductForm = this.fb.group({
      name: ['', { validators: [Validators.required] }]
    });
  }

  getAllProducts() {
    this.products = []; // Clear the products array before fetching new data
    this.adminService.getAllProducts().subscribe(
      (res: any) => {
        console.log('Fetched products:', res);
        this.products = res.map((product: any) => ({
          ...product,
          imageSrc: this.getProductImageSrc(product)
        }));
        console.log('Fetched products:---------------', res);
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  private getProductImageSrc(product: any): string | null {
    const image = product.byteImg || product.image || product.img;

    if (!image) {
      return null;
    }

    if (typeof image === 'string' && image.startsWith('data:image')) {
      return image;
    }

    return `data:image/jpeg;base64,${image}`;
  }

  searchProduct() {
    if (this.searchProductForm.invalid) {
      return;
    }
    
    const productName = this.searchProductForm.value.name;
    this.products = []; // Clear the products array before fetching new data
    this.adminService.getProductsByName(productName).subscribe(
      (res: any) => {
        console.log('Fetched products by name:', res);
        this.products = res.map((product: any) => ({
          ...product,
          imageSrc: this.getProductImageSrc(product)
        }));
      },
      (error) => {
        console.error('Error fetching products by name:', error);
      }
    );
  }

  delete(productId: number) {
    this.adminService.deleteProduct(productId).subscribe(
      (res) => {
        console.log('Product deleted:', res);
        this.matSnackBar.open(res.message, 'Close', {
          duration: 3000,
          panelClass: ['success-snackbar']
        });
        this.getAllProducts(); // Refresh the product list after deletion
      },
      (error) => {
        console.error('Error deleting product:', error);
        this.matSnackBar.open(error.error?.message || 'Error deleting product', 'Close', {
          duration: 3000,
          panelClass: ['error-snackbar']
        });
      }
    );
  }
}
