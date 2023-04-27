import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomecomponentComponent } from './home/homecomponent.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { TagsComponent } from './tags/tags.component';
// import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomecomponentComponent,
    FoodPageComponent,
    SearchComponent,
    FooterComponent,
    TagsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
