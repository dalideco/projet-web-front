import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { HomeComponent } from './home/home.component';
import { WebsiteComponent } from './website.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarouselComponent } from './home/carousel/carousel.component';
import { StoreOrGamePipe } from './store-or-game.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    WebsiteComponent,
    NavbarComponent,
    CarouselComponent,
    StoreOrGamePipe,
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    MatButtonModule,
    MatInputModule,
    FontAwesomeModule,
  ]
})
export class WebsiteModule { }
