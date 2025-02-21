import { Component,inject,Input } from '@angular/core';
import { ProductLocationComponent} from '../product-location/product-location.component';
import { Product } from '../product.interface';
import { CommonModule} from '@angular/common';
import { ProductService} from '../services/product.service';

@Component({
  selector: 'app-home',
  imports: [ProductLocationComponent,CommonModule],
  template: `
    <section class="listing">
        <app-product-location *ngFor="let product of productsList" [product]="product"></app-product-location>
    </section>

  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @Input() selectedCategory: string | null = null;
  @Input() categories: string[] = [];



  productsList: Product[] = [];


  productService: ProductService = inject
  (ProductService);

  constructor() {
    this.productsList = this.productService.getProducts();
  }

  getFilteredProducts(): Product[] {
    if (!this.selectedCategory) {
      return this.productsList;
    }
    return this.productsList.filter(product => product.category === this.selectedCategory);
  }

}




