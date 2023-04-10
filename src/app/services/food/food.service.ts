import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

getall():Food[]{
return[{
  id:1,
  name:"Tiramisu",
  price:25,
  cookTime:"15-20",
  imageUrl:'/assets/Images/tiramisu.jpeg'
 
},
{
  id:2,
  name:"Prajitura cu Caramel",
  price:25,
  cookTime:"15-20",
  imageUrl:'/assets/Images/caramel.jpeg'
 
},
{
  id:3,
  name:"Cheesecake",
  price:25,
  cookTime:"15-20",
  imageUrl:'/assets/Images/cheesecake.jpeg'
},
{
  id:4,
  name:"Clatite",
  price:25,
  cookTime:"15-20",
  imageUrl:'/assets/Images/clatite.jpeg'
},
{
  id:5,
  name:"Cozonac",
  price:25,
  cookTime:"15-20",
  imageUrl:'/assets/Images/cozonac.jpeg'
},
{
  id:6,
  name:"Ecler",
  price:25,
  cookTime:"15-20",
  imageUrl:'/assets/Images/ecler.jpeg'
},
{
  id:7,
  name:"Lavacake",
  price:25,
  cookTime:"15-20",
  imageUrl:'/assets/Images/lava.jpeg'
},
{
  id:8,
  name:"Negresa",
  price:25,
  cookTime:"15-20",
  imageUrl:'/assets/Images/negresa.jpeg'
},
{
  id:9,
  name:"Papanasi",
  price:25,
  cookTime:"15-20",
  imageUrl:'/assets/Images/papanasi.jpeg'
},
{
  id:10,
  name:"Profiterol",
  price:25,
  cookTime:"15-20",
  imageUrl:'/assets/Images/profiterol.jpeg'
},
{
  id:11,
  name:"Salam",
  price:25,
  cookTime:"15-20",
  imageUrl:'/assets/Images/salam.jpeg'
}


]
}
}