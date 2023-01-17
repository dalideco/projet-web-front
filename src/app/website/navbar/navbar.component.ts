import { Component, OnInit } from '@angular/core';
import {
  faCartShopping,
  faBars,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/types/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  faCartShopping = faCartShopping;
  faBars = faBars;
  faXmark = faXmark;

  displayMobileMenu = false;

  constructor(
    public userService: UserService,
    private readonly auth: AuthService
  ) {}

  ngOnInit(): void {}

  toggleMobileMenu() {
    this.displayMobileMenu = !this.displayMobileMenu;
  }

  logout() {
    this.auth.logout()
  }
}
