import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  constructor(private router: Router) { }
  products: any[] = [
    {
      id: 1,
      name: 'Swift Model - Black',
      description: 'Experience triple-layered protection with RO + UV + UF in black color',
      imageUrl: 'swift-model-black.JPG',
      additionalImages: [
        'swift-model-black-1.JPG',
        'swift-model-black-2.JPG',
      ]
    },
    {
      id: 2,
      name: 'Swift Model - White',
      description: 'Experience triple-layered protection with RO + UV + UF in white color',
      imageUrl: 'swift-model-white.JPG',
      additionalImages: [
        'swift-model-white-1.JPG',
        'swift-model-white-2.JPG',
      ]
    },
    {
      id: 3,
      name: 'Arise Model - Black',
      description: 'RO technology paired with Zinc Copper Alkaline enrichment in black color',
      price: 39.99,
      imageUrl: 'arise-model-black.JPG'
    },
    {
      id: 4,
      name: 'Arise Model - White',
      description: 'RO technology paired with Zinc Copper Alkaline enrichment in white color',
      price: 74.99,
      imageUrl: 'arise-model-white.JPG'
    },
    {
      id: 5,
      name: 'Luxury Model - Black',
      description: 'It stands out with its bold black and copper finish—a true blend of modern elegance and performance',
      price: 449.99,
      imageUrl: 'luxury-model-black.JPG'
    },
    {
      id: 6,
      name: 'Luxury Model - White',
      description: 'White Edition brings together premium water purification and a timeless, clean aesthetic.',
      price: 93.99,
      imageUrl: 'luxury-model-white.JPG'
    }
  ];

  viewProductDetails(productId: number): void {
    this.router.navigate(['/products', productId]);
  }

}
