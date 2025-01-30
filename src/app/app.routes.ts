import { Routes } from '@angular/router';
import { HomeComponent } from './layout/pages/home/home.component';
import { CartComponent } from './layout/pages/cart/cart.component';
import { ProductsComponent } from './layout/pages/products/products.component';
import { CategoriesComponent } from './layout/pages/categories/categories.component';
import { BrandsComponent } from './layout/pages/brands/brands.component';
import { NotFoundComponent } from './layout/additions/not-found/not-found.component';

export const routes: Routes = [
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home', component:HomeComponent, title:'Home'},
    {path:'cart', component:CartComponent, title:'Cart'},
    {path:'products', component:ProductsComponent, title:'Products'},
    {path:'categories', component:CategoriesComponent, title:'Categories'},
    {path:'brands', component:BrandsComponent, title:'Brands'},
    {path:'**', component:NotFoundComponent, title:'Not Found'},
];
