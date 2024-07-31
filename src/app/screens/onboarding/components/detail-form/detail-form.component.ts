import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
interface RestaurantRequest {
  name: string;
  owner: string;
  city: string;
  zipCode: number;
  streetName: string;
  type: string;
  contact: number;
}
@Component({
  selector: 'app-detail-form',
  templateUrl: './detail-form.component.html',
  styleUrls: ['./detail-form.component.scss']
})
export class DetailFormComponent {

  username:string='';
  ownerName: string = '';
  message: string = '';
  submittedData: any = null;
  formSubmitted = false;
  restaurantRequest: RestaurantRequest = {
    name: '',
    owner: '',
    city: '',
    type: '',
    contact: 0,
    zipCode: 0,
    streetName: ''
  };

  // restroDetails=new FormGroup({
  //   name:new FormControl<string>(''),
  //   owner:new FormControl<string>(''),
  //   address_street:new FormControl<string>(''),
  //   address_City:new FormControl<string>(''),
  //   address_pin:new FormControl<number | null>(null),
  //   contact:new FormControl<number | null>(null)
  // })

  restroDetails=this.formBuilder.group({
    name:['',Validators.required],   //or new FormControl<string>(''),
    owner:['',Validators.required],
    contact:['',Validators.required],
    type:['',Validators.required],
    address:this.formBuilder.group({
      address_street:new FormControl<string>('',Validators.required),
      address_City:new FormControl<string>('',Validators.required),
      address_pin:new FormControl<number | null>(null,Validators.required)
      
    })
  })

  constructor(private formBuilder:FormBuilder) {

    this.username = 'Trupti';
  }

  

  displayName(): string {
    return 'John';
  }
  displayRestroDetails(){

    console.log(this.restroDetails.value);
   this.createRequest(this.restroDetails);


  }
  createRequest(details: FormGroup) {
    this.restaurantRequest.name = details.value['name'];
    this.restaurantRequest.owner = details.value['owner'];
    this.restaurantRequest.type = details.value['type'];
    this.restaurantRequest.contact = details.value['contact'];
    this.restaurantRequest.city = details.value['address']['city'];
    this.restaurantRequest.zipCode = details.value['address']['zipCode'];
    this.restaurantRequest.streetName = details.value['address']['streetName'];
    this.ownerName = this.restaurantRequest.owner;
  console.log(this.restaurantRequest);
  }

 

}
