import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { ProductsComponent } from './components/cart/products/products.component';
import { ProductDetailsComponent } from './components/cart/product-details/product-details.component';
import { SocialComponent } from './components/social/social.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SubscriptionComponent,
    NavigationComponent,
    ProductsComponent,
    ProductDetailsComponent,
    SocialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
