import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailFormComponent } from './components/detail-form/detail-form.component';
import { ShowRestaurantComponent } from './components/show-restaurant/show-restaurant.component';
import { LoginFormComponent } from './components/login-form/login-form.component';


const routes: Routes = [
  {
    path:'form',
    component:DetailFormComponent
  },
  {
    path:'show',
    component:ShowRestaurantComponent
  },
  {
    path:'login',
    component:LoginFormComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnboardingRoutingModule { }
