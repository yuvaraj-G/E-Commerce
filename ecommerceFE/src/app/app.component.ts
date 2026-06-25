import { Component } from '@angular/core';
import { UserStorageService } from './services/storage/user-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecommerceFE';

  isAdminLoggedIn: boolean = this.userStorageService.isAdminLoggedIn();
  isCustomerLoggedIn: boolean = this.userStorageService.isCustomerLoggedIn();

  constructor(private userStorageService: UserStorageService, private router: Router) {
    this.router.events.subscribe(() => {
      this.isAdminLoggedIn = this.userStorageService.isAdminLoggedIn();
      this.isCustomerLoggedIn = this.userStorageService.isCustomerLoggedIn();
    });
  }

  logout() {
    this.userStorageService.signOut();
    this.router.navigate(['/login']);
  }
}
