import { Component, OnInit } from '@angular/core';
import { ConsumeDataService } from '../consume-data.service';
import { Observable } from 'rxjs/internal/Observable';
import { EmployeeObject } from '../employeeObject';
import { Route, RouterModule, Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';


@Component({
  selector: 'app-login-app',
  templateUrl: './login-app.component.html',
  styleUrls: ['./login-app.component.css']
})
export class LoginAppComponent implements OnInit {

  log:string;
  employeeObject: EmployeeObject;
  emp1: EmployeeObject;
   roredirectUrl: Route[] = [
       {path:'home', component:HomeComponent}
  ];
  redirectUrl: string='/home';

  constructor( private LoginCheckService : ConsumeDataService, private route:Router) {}

  ngOnInit() {
  }

loginCheck(username:string, password: string)
{
  //console.log("USERNAME: "+username+" PASSWORD: "+password);
  this.LoginCheckService.autheticationCheck(username,password).subscribe(result => {
    console.log("RESULT: "+result.authentication);
    this.log = result.authentication;

    if(this.log=='USER FOUND')
    {
        this.userObject(username);
        this.route.navigate([this.redirectUrl]);
    }
  });
 
}


userObject(username:string)
{
  this.LoginCheckService.getUserDetail(username).subscribe(result =>{
    this.employeeObject =result;
    sessionStorage.setItem("userObject",JSON.stringify(result));
    //console.log("EMPLOYEE OBJ "+this.employeeObject.empname+ " RESULT :"+result.empaddress);
  });
 
  //return this.employeeObject;
}


} 
