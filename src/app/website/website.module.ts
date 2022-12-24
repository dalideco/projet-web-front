import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { HomeComponent } from './home/home.component';
import { WebsiteComponent } from './website.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    HomeComponent,
    WebsiteComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    MatButtonModule,
    MatInputModule,
    FontAwesomeModule
  ]
})
export class WebsiteModule { }
