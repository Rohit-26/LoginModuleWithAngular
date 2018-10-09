import { Component, OnInit } from '@angular/core';
import { ConsumeDataService } from '../consume-data.service';
import { Observable } from 'rxjs';
import { Contacts } from '../contacts';
import { Contactsdetail } from '../contactsdetail';

@Component({
  selector: 'app-all-contacts-data',
  templateUrl: './all-contacts-data.component.html',
  styleUrls: ['./all-contacts-data.component.css']
})
export class AllContactsDataComponent implements OnInit {

  protected users$: Observable<any>;

  userDetail : Observable<Contacts[]>;
  contactDetail : Contactsdetail;

  constructor(private fetchService: ConsumeDataService) { }

  ngOnInit() {
    this.fetchService.getData().subscribe(result => {
      this.users$ = result.contacts;
    });

    //this.fetchService.getAllData().subscribe(result => {this.userDetail =result.contacts});

    //this.fetchService.getDataAll().subscribe(result =>{this.contactDetail=result});


  }

}
