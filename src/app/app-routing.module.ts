import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomecomponentComponent } from './home/homecomponent.component';
import { FoodPageComponent } from './food-page/food-page.component';


const routes: Routes = [
  {path:'',component:HomecomponentComponent},
  {path:'search/:searchTerm',component:HomecomponentComponent},
  {path:'food/:id',component:FoodPageComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
