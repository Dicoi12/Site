import { Component,OnInit } from '@angular/core';
// import { Component } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/Food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homecomponent',
  templateUrl: './homecomponent.component.html',
  styleUrls: ['./homecomponent.component.css']
})
export class HomecomponentComponent implements OnInit{

  foods:Food[]=[];
  // tag:Tag[]=[];

  constructor(private foodService:FoodService,private route:ActivatedRoute){}

  ngOnInit(): void {

    this.route.params.subscribe(params =>{
      if(params.searchTerm)
      this.foods=this.foodService.getallFoodsBySearchTerm(params.searchTerm);
      else if(params.tag)
      this.foods=this.foodService.getallFoodsByTag(params.tag);
      else
      this.foods=this.foodService.getall();
    })
   }



}
