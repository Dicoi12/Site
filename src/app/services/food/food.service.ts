import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';
import { Tag } from '../../shared/models/Tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getallFoodsByTag(tag:string):Food[]{
    return tag=="All"?
    this.getall():
    this.getall().filter(food=>food.tags?.includes(tag));


  }
  getallTags():Tag[]{
    return[
      {name:'All',count:11},
      {name:'Desert',count:11},
      {name:'FastFood',count:5}
    ]}

getallFoodsBySearchTerm(searchTerm:string):Food[]{
  return this.getall().filter(food=>food.name.toLowerCase().includes(searchTerm.toLowerCase()))

}


getall():Food[]{
return[{
  id:1,
  name:"Tiramisu",
  price:25,
  cookTime:"15-20",
  imageUrl:'/assets/Images/tiramisu.jpeg',
  tags:['Desert']

},
{
  id:2,
  name:"Prajitura cu Caramel",
  price:15,
  cookTime:"10-15",
  imageUrl:'/assets/Images/caramel.jpeg',
  tags:['Desert']

},
{
  id:3,
  name:"Cheesecake",
  price:28,
  cookTime:"25-30",
  imageUrl:'/assets/Images/cheesecake.jpeg',
  tags:['Desert']
},
{
  id:4,
  name:"Clatite",
  price:10,
  cookTime:"15-20",
  imageUrl:'/assets/Images/clatite.jpeg',
  tags:['Desert']
},
{
  id:5,
  name:"Cozonac",
  price:40,
  cookTime:"30-40",
  imageUrl:'/assets/Images/cozonac.jpeg',
  tags:['Desert']
},
{
  id:6,
  name:"Ecler",
  price:10,
  cookTime:"15-20",
  imageUrl:'/assets/Images/ecler.jpeg',
  tags:['Desert']
},
{
  id:7,
  name:"Lavacake",
  price:18,
  cookTime:"10-15",
  imageUrl:'/assets/Images/lava.jpeg',
  tags:['Desert']
},
{
  id:8,
  name:"Negresa",
  price:15,
  cookTime:"15-20",
  imageUrl:'/assets/Images/negresa.jpeg',
  tags:['Desert']
},
{
  id:9,
  name:"Papanasi",
  price:20,
  cookTime:"15-20",
  imageUrl:'/assets/Images/papanasi.jpeg',
  tags:['Desert']
},
{
  id:10,
  name:"Profiterol",
  price:35,
  cookTime:"15-20",
  imageUrl:'/assets/Images/profiterol.jpeg',
  tags:['Desert']
},
{
  id:11,
  name:"Salam de biscuiti",
  price:20,
  cookTime:"15-20",
  imageUrl:'/assets/Images/salam.jpeg',
  tags:['Desert']
}
,
{
  id:12,
  name:"Shaorma",
  price:25,
  cookTime:"11-25",
  imageUrl:'/assets/Images/hatz.jpeg',
  tags:['FastFood']
}
,
{
  id:13,
  name:"Kebab la Farfurie",
  price:25,
  cookTime:"11-25",
  imageUrl:'/assets/Images/kebab.jpeg',
  tags:['FastFood']
},
{
  id:14,
  name:"Burger",
  price:25,
  cookTime:"11-25",
  imageUrl:'/assets/Images/burger.jpeg',
  tags:['FastFood']
}


]
}
}
