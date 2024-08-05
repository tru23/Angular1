import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnboardingRoutingModule } from './onboarding-routing.module';
import { DetailFormComponent } from './components/detail-form/detail-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShowRestaurantComponent } from './components/show-restaurant/show-restaurant.component';
import { LoginFormComponent } from './components/login-form/login-form.component';



@NgModule({
  declarations: [DetailFormComponent, ShowRestaurantComponent, LoginFormComponent],
  imports: [
    CommonModule,
    OnboardingRoutingModule,
    ReactiveFormsModule
  ]
})
export class OnboardingModule { }
