import { Component, NgModule, EventEmitter, OnInit } from '@angular/core';
import { Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventService } from  'src/services/event.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material';
import { Router } from '@angular/router';

import { MatProgressSpinnerModule } from '@angular/material';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatTableModule,
  MatInputModule
} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  inputs: ['username'],
  outputs: ['username']
})

@NgModule({
  imports: [MatTableModule, MatToolbarModule, MatStepperModule,
    MatFormFieldModule, MatInputModule, BrowserAnimationsModule,
    MatCardModule, FormsModule, CommonModule, NgModule, MatProgressSpinnerModule],
  exports: [MatTableModule, MatToolbarModule, MatStepperModule,
    MatCardModule, MatFormFieldModule, MatInputModule]

})

export class LoginComponent implements OnInit{

  public username: String;
  public password: string;
  dataChange: EventEmitter<String> = new EventEmitter();

  @Output() eventClicked = new EventEmitter<Event>();


  constructor(private router : Router) {
  }

  
  ngOnInit(): void {
    this.dataChange.emit(this.username);
  }

  login() : void {
    if(this.username != '' && this.password == '0990'){
      this.router.navigate(["user", {username: this.username}]);
    }else {
      alert("Please enter both your name and the super secret passcode!");
    }
  }

  }
  