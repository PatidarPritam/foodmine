import { Component } from '@angular/core';
import { Food } from '../../../shared/modals/Food';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FoodService } from '../../../services/food.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css'
})
export class FoodPageComponent {

  food!: Food;

  constructor(activatedRoute:ActivatedRoute, foodService:FoodService){

    activatedRoute.params.subscribe((params)=>{

      this.food = foodService.getFoodById(params.id);
    })



  }

}
