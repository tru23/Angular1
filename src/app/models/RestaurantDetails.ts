import { AddressDetails } from "./Address";

export class RestaurantDetails {
    name: string='';
    owner: string='';
    email: string='';
    contact: number=0;
    type: string='';
    addressDetails: AddressDetails = new AddressDetails;
  }