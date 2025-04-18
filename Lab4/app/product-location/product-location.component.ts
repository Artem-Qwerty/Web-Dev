import { Component, Input } from '@angular/core';
import { Product } from '../product.interface';

@Component({
  selector: 'app-product-location',
  imports: [],
  template: `

    <section class="listing">

        <a href="{{product.kaspiLink}}}"><img class="listing-photo" [src]="product.image" alt="image of {{product.name}}"></a>
        <h2 class="listing-heading">{{product.name}}</h2>
        <p class="listing-description">{{product.description}}</p>

      <!-- From Uiverse.io by faxriddin20 -->
      <a href ="https://telegram.me/share/url?url={{product.name}}&text={{product.kaspiLink}}">
        <button class="telegram">
          <svg
            style="fill:#FFFFFF;"
            class="telegram-svg"
            viewBox="0,0,256,256"
            y="0px"
            x="0px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              style="mix-blend-mode: normal"
              text-anchor="none"
              font-size="none"
              font-weight="none"
              font-family="none"
              stroke-dashoffset="0"
              stroke-dasharray=""
              stroke-miterlimit="10"
              stroke-linejoin="miter"
              stroke-linecap="butt"
              stroke-width="1"
              stroke="none"
              fill-rule="nonzero"
              fill="#ffffff"
            >
              <g transform="scale(5.12,5.12)">
                <path
                  d="M46.137,6.552c-0.75,-0.636 -1.928,-0.727 -3.146,-0.238h-0.002c-1.281,0.514 -36.261,15.518 -37.685,16.131c-0.259,0.09 -2.521,0.934 -2.288,2.814c0.208,1.695 2.026,2.397 2.248,2.478l8.893,3.045c0.59,1.964 2.765,9.21 3.246,10.758c0.3,0.965 0.789,2.233 1.646,2.494c0.752,0.29 1.5,0.025 1.984,-0.355l5.437,-5.043l8.777,6.845l0.209,0.125c0.596,0.264 1.167,0.396 1.712,0.396c0.421,0 0.825,-0.079 1.211,-0.237c1.315,-0.54 1.841,-1.793 1.896,-1.935l6.556,-34.077c0.4,-1.82 -0.156,-2.746 -0.694,-3.201zM22,32l-3,8l-3,-10l23,-17z"
                ></path>
              </g>
            </g>
          </svg>
          <span class="telegram-text">Telegram</span>
        </button>
      </a>

    </section>

  `,
  styleUrl: './product-location.component.css'
})
export class ProductLocationComponent {
  @Input() product!: Product;
}

