import { Component, OnInit } from '@angular/core';
import { ConsumeDataService } from './consume-data.service';
import { Contacts } from './contacts';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  /*protected users$: Observable<any>;
  contacts :Contacts[];*/


  constructor(private fetchService: ConsumeDataService){}

  ngOnInit(){
  
     /* this.fetchService.getData().subscribe(result => {
        this.users$ = result.contacts;
      });*/
  }
}
