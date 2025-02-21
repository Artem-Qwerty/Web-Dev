import { Component, Input,inject} from '@angular/core';
import { Product} from './product.interface';
import { HomeComponent } from './home/home.component';
import { CommonModule} from '@angular/common';
import { ProductService} from './services/product.service';


@Component({
  selector: 'app-root',
  imports: [HomeComponent, CommonModule],
  template: `

    <main>
    <section>
      <button (click)="testClick()">Click Me</button>

      <button *ngFor="let category of categories" (click)="filterProducts(category)">{{category}}</button>
    </section>

      <app-home [categories]="categories" [selectedCategory]="selectedCategory"></app-home>

    </main>

  `,


  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'myProject';
  @Input() product!: Product;
  selectedCategory: string | null = null;

  categories: string[];
  productService: ProductService = inject
  (ProductService);

  constructor() {
    this.categories = this.productService.getCategories();
  }
  testClick() {
    console.log("Button clicked!");
  }

  filterProducts(category: string) {

    this.selectedCategory = category;
    console.log("Category clicked:", category);

  }
}
