import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdToolbarModule, MdIconModule, MdButtonModule, MdMenuModule } from '@angular/material';

import { MainRoutingModule } from './main-routing.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdMenuModule
  ],
  declarations: [
    HeaderComponent, 
    HomeComponent
  ]
})
export class MainModule { }
