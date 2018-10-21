import { Component, NgModule, OnInit } from '@angular/core';
import { EventService } from  'src/services/event.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule, MatToolbarModule } from '@angular/material'
import {MatStepperModule, MatStepper} from '@angular/material/stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

@NgModule({
  imports: [MatTableModule, MatToolbarModule, MatStepperModule, BrowserAnimationsModule],
  exports: [MatTableModule, MatToolbarModule, MatStepperModule]

})


export class UserComponent implements OnInit {

  gapi : any;
  status: boolean = false;
  title = 'newcal-angular';
  
  eventsList;
  theNum;
  newSummary;
  theName = "Placeholder Name";

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    console.log("alright we're starting this thing");
    //Get the calendar
    this.eventService.getCalendar().subscribe(calendar => {
      this.eventsList = calendar
      console.log("events list should show up here")
      console.log(this.eventsList);
      return this.eventsList;
    })

    this.theNum = 0;
    return this.eventsList;
  }

  selectRow(row, stepper: MatStepper) {
    console.log(row);
    stepper.next();
    this.theNum = row;
    return this.theNum;
  }

  addPerson(stepper: MatStepper, role) {
    (role == "Staffing") ? 
      this.newSummary = this.eventsList[this.theNum].summary + " - " + this.theName
    : this.newSummary = this.eventsList[this.theNum].summary + " - " + this.theName + " (Shadowing)";
    console.log("New Summary: " + this.newSummary);
    stepper.next();
  }

  //Configure the new summary for the event w/ staffer name and role
  pushIt() {
    let selectedEvent = this.eventsList[this.theNum];
    selectedEvent.summary = this.newSummary;
    console.log("This will get sent: " + JSON.stringify(selectedEvent))
    
    this.eventService.patchCalendar(selectedEvent).subscribe(newEvent => {
      console.log("This was returned: " + JSON.stringify(newEvent))
    })
    
  }
  }
