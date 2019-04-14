import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})

export class EventService {

  constructor(private http: HttpClient, public http2:Http) {   }

  userName = "";
  api_url = `http://localhost:3000`;
  Newurl = `https://newcal-angular.herokuapp.com/#/user;username=${this.userName}`;
  newcalUrl = `${this.api_url}/api`;

  //Get the list of events
  getCalendar(): Observable<Object>{
    //return this.http.get(this.newcalUrl);
    return this.http.get(this.Newurl);
  }

  patchCalendar(selectedEvent): Observable<Object>{
    return this.http.patch(this.Newurl, selectedEvent);
  }


private handleError(error:any): Promise<any> {
  console.error('An error occurred',error);
  return Promise.reject(error.message || error);
}




}
