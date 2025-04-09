import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  aboutTitle = 'About Us';
  aboutMission = 'At Mr.Paaniwala, we are driven by a singular purpose: to make pure, safe water accessible to everyone. Our commitment extends beyond profit margins; it’s about ensuring that every individual, regardless of their income, can enjoy the benefits of clean water.';

  missions = [
    {
      icon: 'icon-purity.svg',
      title: 'Purity for All',
      description: 'We strive to make pure, safe water accessible to every individual, regardless of their income.'
    },
    {
      icon: 'icon-affordable.svg',
      title: 'Affordability Matters',
      description: 'Our commitment extends beyond profit margins. We offer water purifiers at various price points, ensuring affordability.'
    },
    {
      icon: 'icon-trust.svg',
      title: 'Transparent and Trustworthy',
      description: 'Paaniwala stands for honesty. We provide transparent information, reliable service, and machines you can trust.'
    }
  ];

}