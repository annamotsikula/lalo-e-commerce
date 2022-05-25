import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../components/custom-layout/about/about.component';
import { ProductDetailsComponent } from '../components/cart/product-details/product-details.component';
import { ProductsComponent } from '../components/cart/products/products.component';
import { GalleryComponent } from '../components/custom-layout/gallery/gallery.component';
import { HomeComponent } from '../components/home/home.component';
import { PressComponent } from '../components/custom-layout/press/press.component';
import { MainComponent } from './main.component';
import { PressDetailComponent } from '../components/custom-layout/press-detail/press-detail.component';

const routes: Routes = [
  
    {
        path: '',
        component: MainComponent,
        children: [
          { path: 'home', component: HomeComponent},
          { path: 'products', component: ProductsComponent},
          { path: 'products/:id', component: ProductDetailsComponent},
          { path: 'about', component: AboutComponent},
          { path: 'gallery', component: GalleryComponent},
          { path: 'press', component: PressComponent},
          { path: 'press/:id', component: PressDetailComponent},
          { path: 'auth', loadChildren: () => import('../auth/auth.module').then(m=>m.AuthModule)}

          



        ]
       
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
