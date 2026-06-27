import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserStorageService } from 'src/app/services/storage/user-storage.service';

const BASE_URL = 'http://localhost:8080/';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient, private userStorageService: UserStorageService) { }

  private getAuthHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `Bearer ${this.userStorageService.getToken()}`
    });
  }

  addCategory(categoryData: any) {
    return this.http.post(`${BASE_URL}api/admin/category`, categoryData, { headers: this.getAuthHeaders() });
  }

  getAllCategories() {
    return this.http.get(`${BASE_URL}api/admin/category`, { headers: this.getAuthHeaders() });
  } 

  addProduct(productData: any) {
    return this.http.post(`${BASE_URL}api/admin/product`, productData, { headers: this.getAuthHeaders() });
  }

  getAllProducts() {
    return this.http.get(`${BASE_URL}api/admin/product`, { headers: this.getAuthHeaders() });
  }

  getProductsByName(name: string) {
    return this.http.get(`${BASE_URL}api/admin/search/${name}`, { headers: this.getAuthHeaders() });
  }

  deleteProduct(productId: number) {
    return this.http.delete<{ message: string }>(`${BASE_URL}api/admin/product/${productId}`, { headers: this.getAuthHeaders() });
  }
}
