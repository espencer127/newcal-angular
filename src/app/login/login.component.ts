import { Component, NgModule, OnInit } from '@angular/core';
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
  styleUrls: ['./login.component.scss']
})

@NgModule({
  imports: [MatTableModule, MatToolbarModule, MatStepperModule,
    MatFormFieldModule, MatInputModule, BrowserAnimationsModule,
    MatCardModule, FormsModule, CommonModule, NgModule, MatProgressSpinnerModule],
  exports: [MatTableModule, MatToolbarModule, MatStepperModule,
    MatCardModule, MatFormFieldModule, MatInputModule]

})

export class LoginComponent {


  constructor(private router : Router) {
  }
  
    username : string
    password : string
  
    login() : void {
      if(this.username != '' && this.password == '0990'){
       this.router.navigate(["user"]);
      }else {
        alert("Please enter both your name and the super secret passcode!");
      }
    }
  }
  