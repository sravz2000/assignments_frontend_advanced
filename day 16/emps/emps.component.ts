import { Component} from '@angular/core';

@Component({
  selector: 'app-emps',
  templateUrl: './emps.component.html',
  styleUrls: ['./emps.component.css']
})
export class EmpsComponent{

  public empid:number  = 10256;
  public ename:string  = "Scott";
  public job:string  = "Manager";
  public salary:number = 50000;
  public deptno:number  = 10;
  
  }

