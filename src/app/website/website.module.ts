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
import { ItemListComponent } from './home/item-list/item-list.component';
import { ItemCardComponent } from './home/item-list/item-card/item-card.component';
import { ItemTitlePipe } from './item-title.pipe';
import {MatChipsModule} from '@angular/material/chips'
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    HomeComponent,
    WebsiteComponent,
    NavbarComponent,
    CarouselComponent,
    StoreOrGamePipe,
    ItemListComponent,
    ItemCardComponent,
    ItemTitlePipe,
    CartComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    MatButtonModule,
    MatInputModule,
    FontAwesomeModule,
    MatChipsModule,
    MatIconModule,
    MatBadgeModule
  ]
})
export class WebsiteModule { }
