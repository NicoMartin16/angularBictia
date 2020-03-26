import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  NgbModule  } from '@ng-bootstrap/ng-bootstrap';
import { appRouting } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { DetailComponent } from './components/detail/detail.component';
import { SignupComponent } from './components/signup/signup.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutUsComponent,
    ContactComponent,
    LoginComponent,
    DetailComponent,
    SignupComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    appRouting,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
