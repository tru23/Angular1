import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnboardingRoutingModule } from './onboarding-routing.module';
import { DetailFormComponent } from './components/detail-form/detail-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DetailFormComponent],
  imports: [
    CommonModule,
    OnboardingRoutingModule,
    ReactiveFormsModule
  ]
})
export class OnboardingModule { }
