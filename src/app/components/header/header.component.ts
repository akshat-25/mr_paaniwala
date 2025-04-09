import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuItems = [
    { name: 'About Us', link: '#about' },
    { name: 'Our Solutions', link: '#solutions' },
    { name: 'Products', link: 'products' },
    { name: 'Contact Us', link: 'contact-us' }
  ];
}
