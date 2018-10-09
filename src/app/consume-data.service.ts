import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contacts } from './contacts';
import { Observable, observable } from '../../node_modules/rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {Contactsdetail } from './contactsdetail';

interface myData{
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConsumeDataService {

  webserviceURL='http://localhost:8080/employees/';
  webserviceURLforLogin='http://localhost:8080/login';

  constructor(private http: HttpClient) { }


  getData():Observable<any>
  {
    return this.http.get('https://address-book-demo.herokuapp.com/api/contacts')
    .pipe(map(result => result));
    ;   
  }

  getDataAll():Observable<Contactsdetail>
  {
    return this.http.get<Contactsdetail>('https://address-book-demo.herokuapp.com/api/contacts');   
  }

  getAllData():Observable<any>
  {
    return this.http.get('https://address-book-demo.herokuapp.com/api/contacts')
    .pipe(map(result => result));
    ;   
  }

  getDataByID(username:string){
    console.log('USERNAME: '+username);
    return this.http.get('https://jsonplaceholder.typicode.com/comments?name='+username).
    pipe(map(result => result));
    ; 
    
  }

  getEmployeeDataById(id:number):Observable<any>{
    return this.http.get('http://localhost:8080/employees/'+id)
    .pipe(map(result => result));
  }

  autheticationCheck(username: string, password: string): Observable<string>
  { 
    return this.http.post<string>(this.webserviceURLforLogin,{
      "username":username,
      "password":password,
      responseType: 'text' as 'json'
    });
  }
 
}
