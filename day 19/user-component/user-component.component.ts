import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent implements OnInit {

  public UsersArray:any[]=[];
  public UsersArray1:any[]=[];
  constructor(private HttpObj:HttpClient) { 
    let url="https://www.w3schools.com/angular/customers.php";
    let url1="http://localhost:3000/employees";
    this.HttpObj.get(url).subscribe((response:any)=>{
      //console.log(response);
      this.UsersArray=response.records;
      
    });
    this.HttpObj.get(url1).subscribe((response1:any)=>{
     
      this.UsersArray1=response1;
      
    }
    
    );

  }

  ngOnInit(): void {
  }

}
