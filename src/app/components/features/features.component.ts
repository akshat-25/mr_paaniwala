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
      icon: 'icon-support.svg',
      title: '24/7 Customer Support',
      description: 'Always available to help with your water needs'
    },
    {
      icon: 'icon-pricing.svg',
      title: 'Transparent Pricing',
      description: 'No hidden costs, fair and clear pricing'
    },
    {
      icon: 'icon-community.svg',
      title: 'Community Driven',
      description: 'Working for better water access for all'
    }
  ];
}
