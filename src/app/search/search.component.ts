import { Component, OnInit } from '@angular/core';
import { ConsumeDataService } from '../consume-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  username: number;
  check : number;
  users$: any;
  constructor(private fetchDetailByName: ConsumeDataService) { }

  search(username){
    this.check=username;
    alert(this.username);
    this.fetchDetailByName.getEmployeeDataById(this.check).subscribe(result => {
      this.users$ = result;
      console.log("DATA FROM SERVER"+result);
    });
    
    /*this.fetchDetailByName.getDataByID(this.username).subscribe(result => {
      this.users$ = result;
    });*/
  }
  
  ngOnInit() {
    console.log("Checking:  "+this.check);
    
    
  }
 

}
