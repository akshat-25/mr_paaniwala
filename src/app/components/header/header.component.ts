import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  activeLink: string | null = null;

  menuItems = [
    { name: 'About Us', link: '#about' },
    { name: 'Our Solutions', link: '#solutions' },
    { name: 'Products', link: 'products' },
    { name: 'Contact Us', link: 'contact-us' }
  ];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const currentUrl = this.router.url;
      this.activeLink = currentUrl.startsWith('/') ? currentUrl.slice(1) : currentUrl;
    });

    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        this.activeLink = `#${fragment}`;
      }
    });
  }

  setActive(link: string) {
    this.activeLink = link;
  }
}
