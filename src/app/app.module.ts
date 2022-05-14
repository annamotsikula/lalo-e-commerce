import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { FooterComponent } from './layout/footer/footer.component';
// import { HeaderComponent } from './layout/shared/header/header.component';
// import { NavigationComponent } from './layout/shared/navigation/navigation.component';
import { MainModule } from './main/main.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule
  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
