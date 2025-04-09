import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { SolutionsComponent } from '../solutions/solutions.component';
import { AboutComponent } from '../about/about.component';
import { FeaturesComponent } from '../features/features.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, SolutionsComponent, AboutComponent, FeaturesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}

