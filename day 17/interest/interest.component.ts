import { Component} from '@angular/core';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.css']
})
export class InterestComponent {

    amt:number  =0;
    irate:number  =0;
    period:number  =0;
    result:number  = 0;
    

    CalculateSI():void
    {     
     this.result=(this.amt)*(this.irate)*(this.period)/100;
    }

}
