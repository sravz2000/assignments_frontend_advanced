import { Component} from '@angular/core';
import { gradesModel } from './gradesModel';
import { GradeService } from '../grade.service';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})

export class GradesComponent {

    sno:number = 0;
    name:string = "";
    grades:number = 0;
     

    public gradesArray:gradesModel[]  = [
      {sno : 1, name : "bhavana",  grades : 1} ,
      {sno : 2, name : "sravanthi",  grades :  2},
      {sno : 3, name : "pushpa",  grades :  1},
      {sno : 4, name : "scott",  grades :  3},
      {sno : 5, name : "bhavana",  grades : 1} ,
      {sno : 6, name : "sravanthi",  grades :  4},
      {sno : 7, name : "pushpa",  grades :  3},
      {sno : 8, name : "scott",  grades :  2},
    ];

}
