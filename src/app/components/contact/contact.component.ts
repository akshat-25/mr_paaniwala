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
    phone: '+91 9638612110',
    whatsapp: '+91 9638612110',
    email: 'info@mrpaaniwala.com', 
    whatsapplink: '919638612110'
  };


  businessHours = {
    weekdays: '9:00 AM - 6:00 PM',
    saturday: '10:00 AM - 4:00 PM',
    sunday: 'Closed'
  };

}
