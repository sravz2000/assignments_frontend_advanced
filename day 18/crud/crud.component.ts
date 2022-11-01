import { Component, OnInit } from '@angular/core';
import { ProductsModel } from './ProductsModel';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent  {

  id:number = 0;
  name:string = "";
  price:number=0;
  category:string="";
  quantity:number=0;
  start:number=0;
  end:number=4;
  count:number=0;
  IsButtonDisabled:boolean=false;
  
   

  public prodctsArray:ProductsModel[]  = [];

  

 
  getProduct():void{
    this.prodctsArray=[
    {id : 1, name : "Prd1", price:1000, category:"cat1", quantity:1 },
    {id : 2, name : "Prd2", price:2000, category:"cat2", quantity:2 },
    {id : 3, name : "Prd3", price:3000, category:"cat3", quantity:3 },
    {id : 4, name : "Prd4", price:4000, category:"cat4", quantity:4 },
    {id : 5, name : "Prd5", price:5000, category:"cat5", quantity:5 },
    {id : 6, name : "Prd6", price:6000, category:"cat6", quantity:6 },
    {id : 7, name : "Prd7", price:7000, category:"cat7", quantity:7 },
    {id : 8, name : "Prd8", price:8000, category:"cat8", quantity:8 },
    {id : 1, name : "Prd1", price:1000, category:"cat1", quantity:1 },
    {id : 2, name : "Prd2", price:2000, category:"cat2", quantity:2 },
    {id : 3, name : "Prd3", price:3000, category:"cat3", quantity:3 },
    {id : 4, name : "Prd4", price:4000, category:"cat4", quantity:4 },
    {id : 5, name : "Prd5", price:5000, category:"cat5", quantity:5 },
    {id : 6, name : "Prd6", price:6000, category:"cat6", quantity:6 },
    {id : 7, name : "Prd7", price:7000, category:"cat7", quantity:7 },
    {id : 8, name : "Prd8", price:8000, category:"cat8", quantity:8 }
  ];

  }

  loadProduct():void{
    this.count++;
    this.end=this.end+4;
    if(this.count==3)
    {
      this.IsButtonDisabled=true;
    }
  }


  addProduct():void
    {
      let proObj:ProductsModel = new ProductsModel();
      proObj.id = this.id;
      proObj.name = this.name;
      proObj.price =  this.price;
      proObj.category = this.category;
      proObj.quantity =  this.quantity;

      this.prodctsArray.push( proObj );
    }

    
    deleteProducts(dno:number):void
    { 
        // this.deptsArray.pop();
        let index  = this.prodctsArray.findIndex( item => item.id == dno);
        this.prodctsArray.splice(index,1);
    }

   selectProducts(dno:number):void
    {          
        let proObj:any = this.prodctsArray.find( item => item.id == dno);
        this.id = proObj.id;
        this.name =   proObj.name;
        this.price = proObj.price;
        this.category =   proObj.category;
        this.quantity = proObj.quantity;
    }

    updateProduct(dno:number):void
    {
      let proObj:any = this.prodctsArray.find( item => item.id == dno);
      proObj.name = this.name;
      proObj.price =  this.price;
      proObj.category = this.category;
      proObj.quantity =  this.quantity;
    }

    reset():void{
      this.id = 0;   
      this.name ="";     
      this.price = 0;      
      this.category =   "";
      this.quantity = 0;

    }


}
