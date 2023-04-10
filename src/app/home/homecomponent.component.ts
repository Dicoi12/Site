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

  constructor(private foodService:FoodService,private route:ActivatedRoute){}

  ngOnInit(): void {
    
    this.route.params.subscribe(params =>{
      if(params.searchTerm)
      this.foods=this.foodService.getall().filter(food=>food.name.toLowerCase().includes(params.searchTerm.toLowerCase()))
      else
      this.foods=this.foodService.getall(); 
    })
   }

    
  
}