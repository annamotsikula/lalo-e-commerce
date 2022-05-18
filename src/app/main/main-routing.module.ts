import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from '../components/cart/product-details/product-details.component';
import { ProductsComponent } from '../components/cart/products/products.component';
import { HomeComponent } from '../components/home/home.component';
import { MainComponent } from './main.component';

const routes: Routes = [
  
    {
        path: '',
        component: MainComponent,
        children: [
          { path: 'home', component: HomeComponent},
          { path: 'products', component: ProductsComponent},
          { path: 'products/:id', component: ProductDetailsComponent},
          // { path: 'home', component: HomeComponent}

        ]
       
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
