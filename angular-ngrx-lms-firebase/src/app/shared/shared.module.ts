import { FormInputFieldComponent } from './components/form-input-field/form-input-field.component';
import { YoutubeEmbedUrlPipe } from './pipes/youtube-embed-url.pipe';
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from './components/loader/loader.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    LoaderComponent,
    SafeUrlPipe,
    YoutubeEmbedUrlPipe,
    FormInputFieldComponent
  ],
  exports: [
    LoaderComponent,
    SafeUrlPipe,
    YoutubeEmbedUrlPipe,
    FormInputFieldComponent
  ]
})
export class SharedModule { }
