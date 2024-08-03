export interface AddressDetails {
    id: number;
    streetName: string;
    city: string;
    pin: number;
  }
  export interface RestaurantDetails {
    id: number;
    name: string;
    ownerName: string;
    addressDetails: AddressDetails;
    type: string;
    contact: string;
    email: string;
  }