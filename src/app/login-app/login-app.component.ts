import { Component, OnInit } from '@angular/core';
import { ConsumeDataService } from '../consume-data.service';
import { Observable } from '../../../node_modules/rxjs/internal/Observable';


@Component({
  selector: 'app-login-app',
  templateUrl: './login-app.component.html',
  styleUrls: ['./login-app.component.css']
})
export class LoginAppComponent implements OnInit {

  log:string;
  constructor( private LoginCheckService : ConsumeDataService) {}

  ngOnInit() {
  }

loginCheck(username:string, password: string)
{
  console.log("USERNAME: "+username+" PASSWORD: "+password);
  this.LoginCheckService.autheticationCheck(username,password).subscribe(result => {
    console.log("RESULT "+result);
    this.log = result;
  });
  console.log("USER Authentication: "+this.log);
}

}
