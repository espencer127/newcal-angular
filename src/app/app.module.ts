import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatIconModule,
  MatCardModule,
  MatTableModule
} from '@angular/material';
import {MatStepperModule} from '@angular/material/stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './core/app.routing.module';
import {CustomMaterialModule} from "./core/material.module";
import { CommonModule, APP_BASE_HREF,LocationStrategy,HashLocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { MatProgressSpinnerModule } from '@angular/material';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { routes } from './core/app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatStepperModule,
    NgbModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
  ],
exports: [
  MatToolbarModule,
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatTableModule,
  MatStepperModule,
],
  providers: [
    { provide:APP_BASE_HREF, useValue: '/'},
    { provide: LocationStrategy, useClass:HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
