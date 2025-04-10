import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  currentYear: number = new Date().getFullYear();
  socialMediaItems = [
    { name: 'Facebook', link: '#about', class: 'bi bi-facebook' },
    { name: 'Twitter', link: '#solutions', class: 'bi bi-twitter-x' },
    { name: 'Instagram', link: 'https://www.instagram.com/mr.paaniwala?igsh=YmVjbGF2YmFqNmVh', class: 'bi bi-instagram'  },
  ]
}
