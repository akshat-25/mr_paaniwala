import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {

  product: any | undefined;
  products: any[] = [];
  selectedImage: string = '';

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }
  ngOnInit(): void {
    this.products = [
      {
        id: 1,
        name: 'Swift Model - Black',
        description: 'Triple Purification Technology, RO removes dissolved impurities, heavy metals, and salts. UV kills bacteria and viruses with high-efficiency ultraviolet light. UF filters out physical impurities and microorganisms without affecting essential minerals.',
        imageUrl: 'swift-model-black.JPG',
        additionalImages: [
          'swift-model-black-1.JPG',
          'swift-model-black-2.JPG',
        ]
      },
      {
        id: 2,
        name: 'Swift Model - White',
        description: 'Experience triple-layered protection with the Swift model — combining RO, UV, and UF technologies for crystal-clear, safe drinking water. Sleek, stylish, and powerful, it is designed to fit perfectly into modern homes.',
        imageUrl: 'swift-model-white.JPG',
        additionalImages: [
          'swift-model-white-1.JPG',
          'swift-model-white-2.JPG',
        ]
      },
      {
        id: 3,
        name: 'Arise Model - Black',
        description: 'Advanced RO Filtration – Removes impurities, heavy metals, and TDS, Zinc + Copper + Alkaline – Re-mineralizes water for improved health and immunity, Sleek & Stylish Design – Luxury white-black finish with a soft-touch front panel, Smart LED Indicators – Stay informed with status alerts for purification, power, and tank full',
        price: 39.99,
        imageUrl: 'arise-model-black.JPG',
        additionalImages: [
          'arise-model-black-1.JPG',
          'arise-model-black-2.JPG',
        ]
      },
      {
        id: 4,
        name: 'Arise Model - White',
        description: 'Advanced RO Filtration – Removes impurities, heavy metals, and TDS, Zinc + Copper + Alkaline – Re-mineralizes water for improved health and immunity, Sleek & Stylish Design – Luxury white-black finish with a soft-touch front panel, Smart LED Indicators – Stay informed with status alerts for purification, power, and tank full',
        price: 74.99,
        imageUrl: 'arise-model-white.JPG',
        additionalImages: [
          'arise-model-white-1.JPG',
          'arise-model-white-2.JPG',
        ]
      },
      {
        id: 5,
        name: 'Luxury Model - Black',
        description: 'High-resolution digital SLR camera with versatile lens.',
        price: 449.99,
        imageUrl: 'luxury-model-black.JPG',
        additionalImages: [
          'luxury-model-black-1.JPG',
          'luxury-model-black-2.JPG',
        ]
      },
      {
        id: 6,
        name: 'Luxury Model - White',
        description: 'Wearable fitness tracker with heart rate monitor',
        price: 93.99,
        imageUrl: 'luxury-model-white.JPG',
        additionalImages: [
          'luxury-model-white-1.JPG',
          'luxury-model-white-2.JPG',
        ]
      }
    ];
    
    this.getProduct();
  }

  getProduct(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.products.find(p => p.id === id);
    
    if (this.product) {
      this.selectedImage = this.product.imageUrl;
    }
  }

  setSelectedImage(image: string): void {
    this.selectedImage = image;
  }

  goBack(): void {
    this.location.back();
  }

}
