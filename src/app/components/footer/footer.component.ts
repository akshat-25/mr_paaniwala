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
    { name: 'Facebook', link: 'https://www.facebook.com/profile.php?id=61568966167219', class: 'bi bi-facebook' },
    { name: 'Instagram', link: 'https://www.instagram.com/mr.paaniwala?igsh=YmVjbGF2YmFqNmVh', class: 'bi bi-instagram'  },
  ]
}
