import { Injectable } from '@angular/core';
import { RestaurantRequest } from '../models/RestaurantRequest';
import { HttpClient, HttpClientModule ,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http:HttpClient)//have all calls function to call api as get post put etc
   { }

  onboardRestaurent(restaurantRequest:RestaurantRequest) //this needs to imprt in .ts file in contructor as we import dependencies in constructor
  {
    console.log(restaurantRequest)//need to send this obj to backend

    this.http.
    post('https://d1d5-2401-4900-1c42-1d1e-5d3b-5e67-b50-2eb.ngrok-free.app/restro/create',restaurantRequest,{
      responseType:'text'
    })
    //handleing response---expected and error
    .subscribe({
      next:(response)=>{
        console.log(response);//if there is no error and positive scenario
      },
      error:(error)=>{
        console.log(error);
      }

    });



  }
  getRestroDetails(){
    this.http.get('https://d1d5-2401-4900-1c42-1d1e-5d3b-5e67-b50-2eb.ngrok-free.app/restro/getAll',{
      responseType: 'json',headers:new HttpHeaders({
     "ngrok-skip-browser-warning": "true"
    })})
    .subscribe({
     next:(response)=> console.log(response),
     error: (err)=>{
       console.log(err)
     }
    })
 } 
}

//import http dependency to send request in constructor
