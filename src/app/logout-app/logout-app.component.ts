import { Component, OnInit } from '@angular/core';
import { Route, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-logout-app',
  templateUrl: './logout-app.component.html',
  styleUrls: ['./logout-app.component.css']
})
export class LogoutAppComponent implements OnInit {


  routeLogout="/Login";

  
  constructor(private route: Router) { }

  ngOnInit() {
    sessionStorage.clear();
    this.route.navigate([this.routeLogout]);
    
  }

}
