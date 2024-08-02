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
  restaurantRequest: RestaurantRequest = new RestaurantRequest(); // Use the imported class

  restroDetails = this.formBuilder.group({
    name: ['', Validators.required],
    owner: ['', Validators.required],
    contact: ['',  Validators.required],
    type: ['', Validators.required],
    address: this.formBuilder.group({
      address_street: new FormControl<string>('', Validators.required),
      address_City: new FormControl<string>('', Validators.required),
      address_pin: new FormControl<number | null>(null, Validators.required)
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
  }

  createRequest(details: FormGroup) { //created request   form->dto
    this.restaurantRequest.name = details.value['name'];
    this.restaurantRequest.owner = details.value['owner'];
    this.restaurantRequest.type = details.value['type'];
    this.restaurantRequest.contact = Number(details.value['contact']);
    this.restaurantRequest.city = details.value['address']['address_City'];
    this.restaurantRequest.pin = details.value['address']['address_pin'];
    this.restaurantRequest.streetName = details.value['address']['address_street'];

    this.processRequest(this.restaurantRequest);//processing this request
  }
//each function should only do one task only one responsibility which is easy to read and debugg
  processRequest(restaurantRequest: RestaurantRequest) {//this function calls backend service,if any enrichment needed done in this
    this.backendService.onboardRestaurent(restaurantRequest);//we have send this obj to backend
  } 
}
