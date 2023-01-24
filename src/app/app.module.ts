import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthComponent } from './user/auth/auth.component';
import { FooterComponent } from './user/footer/footer.component';
import { UserPagesComponent } from './user/user-pages/user-pages.component';
import { HeaderComponent } from './user/user-pages/header/header.component';
import { SigninComponent } from './user/auth/signin/signin.component';
import { SignupComponent } from './user/auth/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    FooterComponent,
    UserPagesComponent,
    HeaderComponent,
    SigninComponent,
    SignupComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
