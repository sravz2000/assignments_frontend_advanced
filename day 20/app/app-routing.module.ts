import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DeptsComponent } from './depts/depts.component';
import { DetailsComponent } from './details/details.component';
import { EmpsComponent } from './emps/emps.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { AuthguardService } from './authguard.service';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
  { path :  "", component : HomeComponent },
  { path :  "emps", component : EmpsComponent,canActivate : [AuthguardService] },
  { path :  "depts", component : DeptsComponent ,canActivate : [AuthguardService]},
  { path :  "aboutus", component : AboutusComponent },
  { path :  "details/:no", component : DetailsComponent },
  { path :  "login", component : LoginComponent },
  { path :  "logout", component: LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
