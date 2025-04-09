import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'contact-us', component: ContactComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'products/:id', component: ProductDetailsComponent},
];
