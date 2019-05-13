import { Component, NgModule, OnInit } from '@angular/core';
import { EventService } from  'src/services/event.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule, MatToolbarModule } from '@angular/material'
import {MatStepperModule, MatStepper} from '@angular/material/stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventEmitter } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { LoginComponent } from '../login/login.component';
import { ActivatedRoute } from '@angular/router';
import { Router, Params } from '@angular/router';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  inputs: ['username'],
  outputs: ['username']
})

@NgModule({
  imports: [MatTableModule, MatToolbarModule, MatStepperModule, MatStepper, BrowserAnimationsModule],
  exports: [MatTableModule, MatToolbarModule, MatStepperModule, MatStepper]

})


export class UserComponent implements OnInit {

  //code for alert box;
  private _success = new Subject<string>();

  staticAlertClosed = false;
  successMessage: string;

  gapi : any;
  status: boolean = false;
  title = 'newcal-angular';
  isDataAvailable:boolean = false;
  eventsList: Object;
  theNum=0;
  newSummary;

  username: String;
  dataChange: EventEmitter<String> = new EventEmitter();

  theName: String;

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  constructor(private eventService: EventService, private router: ActivatedRoute) { 
    
  }



  ngOnInit(): void {
    //alertbox code;
    setTimeout(() => this.staticAlertClosed = true, 20000);

    this._success.subscribe((message) => this.successMessage = message);
    this._success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.successMessage = null);

    //this.router.navigate([""]);

    this.router.params.subscribe(params => {
      //assign it to some component member, like
      this.theName = params['username'];
   });

    console.log("alright we're starting this thing w user " + this.theName);

    //Get the calendar
    
    this.eventService.getCalendar().subscribe(calendar => {
      this.eventsList = calendar
      console.log("events list should show up here")
      console.log(this.eventsList);
      this.isDataAvailable = true;
      return this.eventsList;
    })
   
  }

  selectRow(row, stepper: MatStepper) {
    console.log(row);
    stepper.next();
    this.theNum = row;
    return this.theNum;
  }

  addPerson(stepper: MatStepper, role) {

    /*addl logic for later: 
    1. If there's a - and no (, add a ", new name"
    etc etc etc
    */
   var currentSummary = this.eventsList[this.theNum].summary;

   // If this event already have a staffer...
   if ( (currentSummary.includes("-") && !(currentSummary.includes("(")) ) ) {
    (role == "Staffing") ? 
      this.newSummary = currentSummary + " - " + this.theName + " (Staffing)" :
      this.newSummary = currentSummary + " - " + this.theName + " (Shadowing)";
   } 
   // If event already has a shadower...
   if ( (currentSummary.includes("-") && (currentSummary.includes("(")) ) ) {
     var dashPlace = currentSummary.indexOf("-");
     var parentPlace = currentSummary.indexOf(")");
     (role == "Staffing") ?
     this.newSummary = [currentSummary.slice(0, dashPlace), this.theName, currentSummary.slice(dashPlace)].join('') :
     this.newSummary = [currentSummary.slice(0, parentPlace), this.theName, currentSummary.slice(parentPlace)].join('')
    }
   // If it doesn't have either...just add to the end
   else {
    (role == "Staffing") ? 
      this.newSummary = currentSummary + " - " + this.theName + " (Staffing)":
      this.newSummary = currentSummary + " - " + this.theName + " (Shadowing)";
   }
   stepper.next();
  }

  //Configure the new summary for the event w/ staffer name and role
  pushIt() {
    let selectedEvent = this.eventsList[this.theNum];
    selectedEvent.summary = this.newSummary;
    console.log("This will get sent: " + JSON.stringify(selectedEvent))
    
    this.eventService.patchCalendar(selectedEvent).subscribe(newEvent => {
      console.log("This was returned: " + JSON.stringify(newEvent));
      })
      this._success.next(`The calendar event was successfully updated. This page will reload in 5 seconds.`);
    
      setTimeout(() => {
        window.location.reload();
      }, 5000);
  }
  }