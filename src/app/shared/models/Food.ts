export class Food{
    [x: string]: any;
    // constructor(id:number){
    //     this.id=id;
    // }
    id!:number;
    name!:string;
    price!:number;
   
    imageUrl!:string;
    
    cookTime!:string;
    tags?:string[];
//   tags: any;
    // tag:string;
    constructor(id:number,
        name:string,
        price:number,
        imageUrl:string,
        cookTime:string,
        tags:string[]
    ){            

        }
        
}