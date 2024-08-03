import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnboardingModule } from './screens/onboarding/onboarding.module';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ContactComponent,
    AboutComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OnboardingModule,
    HttpClientModule//service sathi
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
