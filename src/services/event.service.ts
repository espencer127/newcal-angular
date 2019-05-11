import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})

export class EventService {

  constructor(private http: HttpClient) {   }


  process: {
    env: {
        NODE_ENV: string
    }
 };

  BASEURL = 'https://newcal-angular.herokuapp.com';
  PORT = process.env.PORT || 3000;
  api_url = `http://localhost:${this.PORT}`;
  newcalUrl = `${this.api_url}/api`;

  //Get the list of events
  getCalendar(): Observable<Object>{
    return this.http.get(this.newcalUrl);
  }

  patchCalendar(selectedEvent): Observable<Object>{
    return this.http.patch(this.newcalUrl, selectedEvent);
  }


private handleError(error:any): Promise<any> {
  console.error('An error occurred',error);
  return Promise.reject(error.message || error);
}




}
