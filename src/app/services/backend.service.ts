import { Injectable } from '@angular/core';
import { RestaurantRequest } from '../models/RestaurantRequest';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule ,HttpHeaders} from '@angular/common/http';

import { LoginRequest } from 'src/app/models/LoginRequest';
import { RestaurantDetails } from '../models/RestaurantDetails';

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
    post('https://70d7-2401-4900-1c42-70c6-e466-d110-8f1c-64a9.ngrok-free.app/restro/create',restaurantRequest,{
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
  getAllRestaurants(): Observable<RestaurantDetails[]> {
    return this.http.get<RestaurantDetails[]>('https://70d7-2401-4900-1c42-70c6-e466-d110-8f1c-64a9.ngrok-free.app/restro/getAll', {
      responseType: 'json',
      headers: new HttpHeaders({
        'ngrok-skip-browser-warning': 'true',
      }),
    });
  }
  login(credentials: LoginRequest): Observable<any> {
    return this.http.post('', credentials, {
      responseType: 'json'
    });
  }
}

//import http dependency to send request in constructor
