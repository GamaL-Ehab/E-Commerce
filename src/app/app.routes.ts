import { Routes } from '@angular/router';
import { HomeComponent } from './layout/pages/home/home.component';
import { CartComponent } from './layout/pages/cart/cart.component';
import { ProductsComponent } from './layout/pages/products/products.component';
import { CategoriesComponent } from './layout/pages/categories/categories.component';
import { BrandsComponent } from './layout/pages/brands/brands.component';
import { NotFoundComponent } from './layout/additions/not-found/not-found.component';
import { LoginComponent } from './layout/pages/login/login.component';
import { RegisterComponent } from './layout/pages/register/register.component';

export const routes: Routes = [
    {path:'', redirectTo:'login', pathMatch:'full'},
    {path:'login', component:LoginComponent, title:'Login'},
    {path:'register', component:RegisterComponent, title:'Register'},
    {path:'home', component:HomeComponent, title:'Home'},
    {path:'cart', component:CartComponent, title:'Cart'},
    {path:'products', component:ProductsComponent, title:'Products'},
    {path:'categories', component:CategoriesComponent, title:'Categories'},
    {path:'brands', component:BrandsComponent, title:'Brands'},
    {path:'**', component:NotFoundComponent, title:'Not Found'},
];
