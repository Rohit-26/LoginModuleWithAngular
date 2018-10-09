import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contacts } from './contacts';
import { Observable, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {Contactsdetail } from './contactsdetail';
import { Authentication } from './Authentication';
import { EmployeeObject } from './employeeObject';

interface myData{
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConsumeDataService {
  webserviceUrl='http://localhost:8080/';

  //webserviceURL='http://localhost:8080/employees/';
  webserviceURLforLogin=this.webserviceUrl+'login';
  webserviceURLforEmployeeObject=this.webserviceUrl+'employeeDetail/';

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


  /*
  This method is for authenticating user.
  */

  autheticationCheck(username: string, password: string): Observable<Authentication>
  { 
    //const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.http.post<Authentication>(this.webserviceURLforLogin,{
      "username":username,
      "password":password
      //responseType: 'text' as 'json'
    });
  }

  /*
  This method is used to fetch the user object based on its username
  */

  getUserDetail(username:string) : Observable<EmployeeObject>
  {
      return this.http.get<EmployeeObject>(this.webserviceURLforEmployeeObject+username).pipe(map(result => result));
  }
 
}
