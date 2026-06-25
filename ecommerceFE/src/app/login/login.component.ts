import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserStorageService } from '../services/storage/user-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  hidePassword: boolean = false;

  constructor(
      private formBuilder: FormBuilder,
      private snackBar: MatSnackBar,
      private router: Router,
      private authService: AuthService,
      private userStorageService: UserStorageService
    ) { }

  ngOnInit(): void {
      this.loginForm = this.formBuilder.group({
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required]]
      });
  }
  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }
  onSubmit() {
    const username = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;
    this.authService.login(username, password).subscribe(
      (res: any) => {
        this.snackBar.open('Login successful', 'Close', {
          duration: 3000,
          panelClass: ['success-snackbar']
        });
        console.log('Login successful:', res);
        console.log('this.userStorageService.isAdminLoggedIn()', this.userStorageService.isAdminLoggedIn());
        if (this.userStorageService.isAdminLoggedIn()) {
          this.router.navigate(['/admin/dashboard']);
        } else {
          this.router.navigate(['/customer/dashboard']);
        }
      },
      (error: any) => {
        this.snackBar.open('Login failed', 'Close', {
          duration: 3000,
          panelClass: ['error-snackbar']
        });
      }
    );
  }
}
