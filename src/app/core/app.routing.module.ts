
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { LoginComponent } from '../login/login.component';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

export const routes: Routes = [
    { path: 'user', component: UserComponent },
    { path: 'login', component: LoginComponent },
    { path : '', component : LoginComponent}
  ];
  
  @NgModule({
    imports: [
      
      RouterModule.forRoot(routes, {useHash: true}),
      //FormsModule
    ],
    exports: [
      RouterModule
    ],
    declarations: []
  })
  export class AppRoutingModule { }