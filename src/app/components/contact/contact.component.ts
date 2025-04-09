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
    address: '123 Water Street, Mumbai, Maharashtra 400001, India',
    phone: '+91 98765 43210',
    whatsapp: '+91 98765 43210',
    email: 'info@mrpaaniwala.com'
  };


  businessHours = {
    weekdays: '9:00 AM - 6:00 PM',
    saturday: '10:00 AM - 4:00 PM',
    sunday: 'Closed'
  };

}
