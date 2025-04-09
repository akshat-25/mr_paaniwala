import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.scss'
})
export class SolutionsComponent {
  solutionsTitle = 'Our Solutions';
  
  solutions = [
    {
      icon: 'icon-purifier.svg',
      title: 'RO Systems',
      description: 'Our purifiers use advanced filtration technology to remove impurities, chemicals, and contaminants, ensuring crystal-clear water.'
    },
    {
      icon: 'icon-uv-purifier.svg',
      title: 'UV Purifiers',
      description: 'Our UV purifiers includes installation, regular maintenance, and filter replacements. It is hassle- free and cost-effective.'
    },
    {
      icon: 'icon-softener.svg',
      title: 'Commercial RO Plants',
      description: 'Hotels, restaurants, and offices need reliable water solutions. Mr. Paaniwala offers customized commercial water purification plants.'
    },
    {
      icon: 'icon-ro-purifier.svg',
      title: 'Water Softeners',
      description: 'Hard water can cause scale buildup in pipes, appliances, and fixtures. Our water softeners help prevent this.'
    },
    {
      icon: 'icon-ro-service.svg',
      title: 'RO Servicing',
      description: 'Regular servicing is essential for the longevity of your RO system. Trust our experts to keep your RO unit in top condition.'
    },
    {
      icon: 'icon-water-testing.svg',
      title: 'Water Quality Testing',
      description: 'Ensure the safety of your water with our professional testing services. We analyze for contaminants, pH levels, hardness, and more to recommend the right solution for you.'
    }
  ];
}
