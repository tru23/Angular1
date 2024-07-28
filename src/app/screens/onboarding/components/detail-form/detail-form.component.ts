import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-detail-form',
  templateUrl: './detail-form.component.html',
  styleUrls: ['./detail-form.component.scss']
})
export class DetailFormComponent {

  username:string='';

  restroDetails=new FormGroup({
    name:new FormControl<string>(''),
    owner:new FormControl<string>('')
  })

  constructor() {

    this.username = 'Trupti';
  }

  

  displayName(): string {
    return 'John';
  }
  displayRestroName(){
    console.log(this.restroDetails)

  }

}
