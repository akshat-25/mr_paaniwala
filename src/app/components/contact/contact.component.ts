import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactInfo = {
    address: '1/33 80 feet road, 6th Main Rd, KHB Colony, Basaveshwar Nagar, Karnataka 560079',
    phone: '+91 8217420436',
    whatsapp: '+91 8217420436',
    email: 'mrpaaniwala@gmail.com', 
    whatsapplink: '918217420436'
  };


  businessHours = {
    weekdays: '10:00 AM - 8:00 PM',
    sunday: 'Closed'
  };

}
