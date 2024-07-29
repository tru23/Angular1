import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-detail-form',
  templateUrl: './detail-form.component.html',
  styleUrls: ['./detail-form.component.scss']
})
export class DetailFormComponent {

  username:string='';

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

    console.log(this.restroDetails.value.name);
    console.log(this.restroDetails.value.owner);
    console.log(this.restroDetails.value.contact);

    const address = this.restroDetails.value.address;
    console.log(address?.address_street);
    console.log(address?.address_City);
    console.log(address?.address_pin);


  }

}
