import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BackendService } from 'src/app/services/backend.service';
import { RestaurantRequest } from 'src/app/models/RestaurantRequest'; 

@Component({
  selector: 'app-detail-form',
  templateUrl: './detail-form.component.html',
  styleUrls: ['./detail-form.component.scss']
})
export class DetailFormComponent {

  username: string = '';
  ownerName: string = '';
  message: string = '';
  submittedData: any = null;
  formSubmitted = false;
  showPopup: boolean = false; // Add this line to control the popup
  restaurantRequest: RestaurantRequest = new RestaurantRequest(); // Use the imported class

  restroDetails = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    owner: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]], // Added email field with required and email validation
    contact: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]], // Assuming a 10-digit phone number
    type: ['', Validators.required],
    address: this.formBuilder.group({
      address_street: new FormControl<string>('', Validators.required),
      address_City: new FormControl<string>('', Validators.required),
      address_pin: new FormControl<number | null>(null, [Validators.required, Validators.pattern('^[0-9]{6}$')]) // Assuming a 6-digit pin code
    })
  });

  constructor(private formBuilder: FormBuilder, private backendService: BackendService)// import karan dependencies contructor madhe import karat-servise is dependencies -known as dependency ingestion
  {
    this.username = 'Trupti';
  }

  displayName(): string {
    return 'John';
  }

  displayRestroDetails() {
    console.log(this.restroDetails.value);
    this.createRequest(this.restroDetails);
    this.showPopup = true; // Show the popup when the form is submitted
    setTimeout(() => {
      this.showPopup = false; // Hide the popup after 3 seconds
    }, 3000);
  }

  createRequest(details: FormGroup) { //created request   form->dto
    this.restaurantRequest.name = details.value['name'];
    this.restaurantRequest.owner = details.value['owner'];
    this.restaurantRequest.type = details.value['type'];
    this.restaurantRequest.type = details.value['email'];
    this.restaurantRequest.contact = Number(details.value['contact']);
    this.restaurantRequest.city = details.value['address']['address_City'];
    this.restaurantRequest.zipcode = details.value['address']['address_pin'];
    this.restaurantRequest.street = details.value['address']['address_street'];

    this.processRequest(this.restaurantRequest);//processing this request
  }
//each function should only do one task only one responsibility which is easy to read and debugg
  processRequest(restaurantRequest: RestaurantRequest) {//this function calls backend service,if any enrichment needed done in this
    this.backendService.onboardRestaurent(restaurantRequest);//we have send this obj to backend
  } 
}
