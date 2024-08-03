import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  { path: 'contact', component:ContactComponent },
  { path: 'about', component:AboutComponent },
  
  {
    path:'onboarding',
    loadChildren:() => import('./screens/onboarding/onboarding.module').then((module) => module.OnboardingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]
})
export class AppRoutingModule { }
