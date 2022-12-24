import { Component, OnInit } from '@angular/core';
import { faCartShopping, faBars,faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  faCartShopping = faCartShopping
  faBars = faBars
  faXmark = faXmark

  displayMobileMenu = false ;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMobileMenu(){
    this.displayMobileMenu = !this.displayMobileMenu
  }
}
