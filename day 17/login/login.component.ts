import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent 
{
    uid:string  = "";
    pwd:string  = "";
    result:string  = "";
    isButtonDisable = false;
    count:number = 0;
    statusColor:string="";

    isValidUser():void
    {     
      if(this.uid == "admin"  && this.pwd == "admin123")
      {
        this.result  = "Welcome to Admin";
        this.statusColor = "green";
      }
      else
      {
        this.count++;
        this.result  = "Invalid user id or password";
        this.statusColor = "red";
        //alert(this.count);
        if(this.count == 3)
        {
          this.isButtonDisable = true;
        }

      }
    }
}
