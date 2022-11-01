import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GradeService {

 
  getGrades():any[]{
    let grade:any[]=[{sno : 1, name : "bhavana",  grades : 1} ,
    {sno : 2, name : "sravanthi",  grades :  2},
    {sno : 3, name : "pushpa",  grades :  1},
    {sno : 4, name : "scott",  grades :  3},
    {sno : 5, name : "bhavana",  grades : 1} ,
    {sno : 6, name : "sravanthi",  grades :  4},
    {sno : 7, name : "pushpa",  grades :  3},
    {sno : 8, name : "scott",  grades :  2}];
    return grade;
}
}
