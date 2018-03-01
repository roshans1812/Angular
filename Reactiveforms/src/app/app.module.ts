import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { RegisterComponent } from './Registration/register.component';
import { LoginComponent } from './Login/login.component';
import { HomeComponent } from './Home/home.component';
import { Component } from '@angular/core/src/metadata/directives';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {  path: 'login',component:LoginComponent},
      { path:  'register',component:RegisterComponent},
      { path: 'home',component:HomeComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
     
    ])
  ],
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
