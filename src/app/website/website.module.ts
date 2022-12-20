import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { HomeComponent } from './home/home.component';
import { WebsiteComponent } from './website.component';


@NgModule({
  declarations: [
    HomeComponent,
    WebsiteComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule
  ]
})
export class WebsiteModule { }
