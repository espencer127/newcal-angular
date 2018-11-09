import { Component, NgModule, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule, MatToolbarModule } from '@angular/material'
import {MatStepperModule, MatStepper} from '@angular/material/stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './user/user.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  
})

@NgModule({
  imports: [MatTableModule, MatToolbarModule, MatStepperModule, BrowserAnimationsModule],
  exports: [MatTableModule, MatToolbarModule, MatStepperModule]

})


export class AppComponent implements OnInit {

  title = 'newcal-angular';
  
  eventsList;
  theNum;
  newSummary;
  theName = "Placeholder Name";

  username: String = "";

  name: string;
  passcode: string;

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {

  }

  login() : void {
    if (this.passcode== "0880") {
      this.router.navigate([UserComponent])
    } else {
      alert("Oh no! Got the passcode wrong!")
    }
  }

}
