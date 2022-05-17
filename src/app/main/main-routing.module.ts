import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
          // { path: 'home', component: HomeComponent},
          // { path: 'home', component: HomeComponent}

        ]
       
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
