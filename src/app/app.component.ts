import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend-test';

  constructor(private router: Router){ }
 
//  navigateFormPage() {
// //   this.router.navigate(['/onboarding/form']);
//  }

}
