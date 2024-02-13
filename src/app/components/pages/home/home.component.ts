import { Component } from '@angular/core';
import { Food } from '../../../shared/modals/Food';
import { FoodService } from '../../../services/food.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RatingModule } from 'ng-starrating';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,CommonModule],

  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  foods:Food[]=[];

constructor( private foodService:FoodService){
  this.foods = foodService.getAll();

}

}
