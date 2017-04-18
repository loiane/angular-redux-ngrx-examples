import { LoaderComponent } from './components/loader/loader.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoaderComponent
  ],
  exports: [
    LoaderComponent
  ]
})
export class SharedModule { }
