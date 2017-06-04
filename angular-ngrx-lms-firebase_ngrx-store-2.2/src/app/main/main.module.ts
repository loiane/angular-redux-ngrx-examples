import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { StartComponent } from './start/start.component';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  declarations: [
    StartComponent,
    HeaderComponent,
    ErrorComponent,
    HomeComponent,
    MainComponent
  ],
  exports: [
    MainComponent,
    StartComponent
  ]
})
export class MainModule { }
