import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent {
id:String='';
constructor(private route:ActivatedRoute,private router:Router){

}
ngOnInit():void{

}
}
