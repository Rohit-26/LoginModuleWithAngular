import { Component, OnInit } from '@angular/core';
import { EmployeeObject } from '../employeeObject';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  employeeDetail;
  constructor() { }

  ngOnInit() {
  this.employeeDetail=JSON.parse(sessionStorage.getItem('userObject'));
  console.log(this.employeeDetail.empname);
  }

getUserObjectFromSession()
{

  
 // this.employeeDetail=sessionStorage.getItem("userObject");
}

}
