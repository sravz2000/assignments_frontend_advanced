import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'grade'
})
export class GradePipe implements PipeTransform {

  transform(input:number) : string {

    let output:string  = "";

    if(  input ==  1 )
      output  = "Outastanding";
    
    if(  input ==  2 )
      output  = "Excellent";

    if(  input ==  3 )
      output  = "Good";
    
    if(  input ==  4 )
      output  = "Average";

    return output;

}
}