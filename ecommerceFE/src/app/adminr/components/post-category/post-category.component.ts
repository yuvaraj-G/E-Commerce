import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-post-category',
  templateUrl: './post-category.component.html',
  styleUrls: ['./post-category.component.scss']
})
export class PostCategoryComponent implements OnInit {
  categoryForm! : FormGroup;
  constructor(private adminService: AdminService, private fb: FormBuilder, private router: Router, private matSnackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.categoryForm = this.fb.group({
      name: [null, { validators: [Validators.required] }],
      description: [null, { validators: [Validators.required] }]
    });
  }
  
  addCategory() {
    if (this.categoryForm.valid) {
      const categoryData = this.categoryForm.value;
      this.adminService.addCategory(categoryData).subscribe(
        (res: any) => {
          console.log('Category added successfully:', res);
          this.matSnackBar.open('Category added successfully', 'Close', {
            duration: 3000,
            panelClass: ['success-snackbar']
          });
          this.router.navigate(['/admin/dashboard']);
        },
        (error: any) => {
          console.error('Error adding category:', error);
          this.matSnackBar.open('Error adding category', 'Close', {
            duration: 3000,
            panelClass: ['error-snackbar']
          });
        }
      );
    } else {
      this.categoryForm.markAllAsTouched();
    }
  }
}
