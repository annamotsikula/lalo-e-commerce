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
      ProductCardComponent
     
      
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
