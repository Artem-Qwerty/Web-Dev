import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { CommonModule } from '@angular/common';
import { ProductService } from './services/product.service';  // Import services

@NgModule({

  imports: [
    BrowserModule,   // Necessary for running the app in a browser
    CommonModule,
    AppComponent,
    // Provides Angular directives like *ngFor and *ngIf
  ],
  providers: [
    ProductService   // Make ProductService available to all components
  ],

})
export class AppModule { }
