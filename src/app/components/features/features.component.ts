import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent {
  features = [
    {
      icon: 'icon-purifier.svg',
      title: 'Affordable Purifiers',
      description: 'Quality water purifiers at budget-friendly prices'
    },
    {
      icon: 'icon-delivery.svg',
      title: 'All India Delivery',
      description: 'Always available to help with your water needs'
    },
    {
      icon: 'icon-iso.svg',
      title: 'An ISO 9001:2015 Certified',
      description: 'Working for better water access for all'
    },
    {
      icon: 'icon-pricing.svg',
      title: 'Transparent Pricing',
      description: 'No hidden costs, fair and clear pricing'
    },
  ];
}
