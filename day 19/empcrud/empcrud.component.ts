
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-empcrud',
  templateUrl: './empcrud.component.html',
  styleUrls: ['./empcrud.component.css']
})
export class EmpcrudComponent {

  public studentsArray:any[] =  [];
  studentId:number = 0;
  name:string  = "";
  city:string  = "";
  email:string  = "";
  age:number = 0;


 

  constructor(private  serviceObj:DataService) {
    
  }

 
  public getData_click():any
  {	 
       this.serviceObj.getAllStudents().subscribe( (response:any) =>
       {
          this.studentsArray = response;
       });
  }

  public addData_click():any
  {	 
    let stObj:any = {};
    stObj.name = this.name;
    stObj.city = this.city;
    stObj.email = this.email;
    stObj.age = this.age;


    this.serviceObj.addStudent(stObj).subscribe( (response:any) =>
    {
      // this.studentsArray = response;
      alert("New Student details are added to server");
      console.log(stObj);
      this.getData_click();
    });
  }


  public selectData_click(id:number):void
  {	 
       this.serviceObj.getStudentById(id).subscribe( (resData:any) =>
       {
        this.studentId = id;
        this.name = resData.name;
        this.email = resData.email;
        this.city = resData.city;
        this.age = resData.age;
       });
  }

  public deleteData_click(id:number):any
  {	 
       this.serviceObj.deleteStudent(id).subscribe( (resData:any) =>
       {
        alert("Selected Student details are deleted from  server");
        this.getData_click();
       });
  }

  public updateData_click(idno:number):any
  {	 
    let stObj:any = {};
    alert
    stObj.studentId=idno;
    stObj.name = this.name;
    stObj.city = this.city;
    stObj.email = this.email;
    stObj.age = this.age;
    console.log(idno);
    this.serviceObj.updateStudent(stObj).subscribe( (resData:any) =>
    {
      this.getData_click();
    });
  }
 public clearData():void{
  this.name="";
  this.email="";
  this.age = 0;
  this.city="";
 }

}
