import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { HeaderComponent } from '../layout/header/header.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { NavigationComponent } from '../layout/navigation/navigation.component';
import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from '../components/home/home.component';
import { SubscriptionComponent } from '../components/subscription/subscription.component';
import { SocialComponent } from '../components/social/social.component';
import { BannerComponent } from '../components/banner/banner.component';
import { BtnShopComponent } from '../components/action/btn-shop/btn-shop.component';
import { AdsComponent } from '../components/ads/ads.component';
import { CollectionComponent } from '../components/collection/collection.component';
import { ProductCardComponent } from '../components/cart/product-card/product-card.component';
import { ProductsComponent } from '../components/cart/products/products.component';
import { BtnCartComponent } from '../components/action/btn-cart/btn-cart.component';
import { ProductDetailsComponent } from '../components/cart/product-details/product-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from '../components/custom-layout/about/about.component';
import { PressComponent } from '../components/custom-layout/press/press.component';
import { GalleryComponent } from '../components/custom-layout/gallery/gallery.component';
import { PressDetailComponent } from '../components/custom-layout/press-detail/press-detail.component';
import { AuthModule } from '../auth/auth.module';



@NgModule({
    declarations: [
      MainComponent,
      HeaderComponent,
      FooterComponent,
      NavigationComponent,
      HomeComponent,
      SubscriptionComponent,
      SocialComponent,
      BannerComponent,
      BtnShopComponent,
      AdsComponent,
      CollectionComponent,
      ProductCardComponent,
      ProductDetailsComponent,
      ProductsComponent,
      BtnCartComponent,
      AboutComponent,
      PressComponent,
      GalleryComponent,
      PressDetailComponent
     
      
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ReactiveFormsModule,
    AuthModule
  ],
  exports: [
    AdsComponent,
    CollectionComponent,
    BannerComponent,
    ReactiveFormsModule
  ]
})
export class MainModule { }
