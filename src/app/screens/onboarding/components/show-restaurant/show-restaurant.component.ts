import { Component } from '@angular/core';
import { RestaurantDetails } from 'src/app/models/RestaurantDetails';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-show-restaurant',
  templateUrl: './show-restaurant.component.html',
  styleUrls: ['./show-restaurant.component.scss']
})
export class ShowRestaurantComponent {
  restaurants: RestaurantDetails[] = [];

  constructor(private backend: BackendService) { }

  ngOnInit(): void {
    this.loadRestaurants();
}

loadRestaurants(): void {
  this.backend.getAllRestaurants().subscribe({
    next: (response: RestaurantDetails[]) => {
      this.restaurants = response;
      console.log(this.restaurants);
    },
    error: (err: any) => {
      console.error(err);
    }
    });
  }
}
