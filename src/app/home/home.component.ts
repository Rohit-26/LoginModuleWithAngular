import { Component, OnInit } from '@angular/core';
import { EmployeeObject } from '../employeeObject';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  employeeDetail : any;
  isInitialize=false;
  constructor() {
    
   }

  ngOnInit() {
    console.log("in init");
  }

  ngDoCheck(){
    console.log("in do check");

    this.employeeDetail = JSON.parse(sessionStorage.getItem('userObject'));
    console.log(this.employeeDetail.empname);

   
  }

}
