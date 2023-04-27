import { Component, OnInit } from '@angular/core';
import { Tag } from '../shared/models/Tag';
import { FoodService } from '../services/food/food.service';
//import { Tag } from '../shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit{
  constructor(private foodservice:FoodService){}
  tags:Tag[]=[];


  ngOnInit(): void {
    this.tags=this.foodservice.getallTags();
  }

}
