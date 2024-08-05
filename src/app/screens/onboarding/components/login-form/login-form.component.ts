import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BackendService } from 'src/app/services/backend.service';
import { LoginRequest } from 'src/app/models/LoginRequest'; // Import LoginRequest

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  loginRequest: LoginRequest = new LoginRequest(); // Use the imported class
  loginDetails: FormGroup;
  showPopup: boolean = false; // Add this line to control the popup

  constructor(private formBuilder: FormBuilder, private backendService: BackendService) {
    this.loginDetails = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginDetails.valid) {
      this.createRequest(this.loginDetails);
    }
  }

  createRequest(details: FormGroup) { // Created request form -> dto
    this.loginRequest.email = details.value['email'];
    this.loginRequest.password = details.value['password'];

    this.processRequest(this.loginRequest); // Processing this request
  }

  processRequest(loginRequest: LoginRequest) { // This function calls backend service
    this.backendService.login(loginRequest).subscribe({
      next: (response) => {
        console.log(response); // If there is no error and positive scenario
        this.showPopup = true; // Show the popup on successful login
        setTimeout(() => {
          this.showPopup = false; // Hide the popup after 3 seconds
        }, 3000);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
