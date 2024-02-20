import { Component } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { ActivatedRoute, Route, RouterLink } from '@angular/router';
import { FoodService } from '../../../services/food.service';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../services/cart.service';
import { Router } from '@angular/router';
import NotFoundComponent from '../../partials/not-found/not-found.component';

@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [CommonModule,RouterLink,NotFoundComponent],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css'
})
export class FoodPageComponent {

  food!: Food;

  constructor(activatedRoute:ActivatedRoute, foodService:FoodService,
   private  cartService:CartService, private router : Router){

    activatedRoute.params.subscribe((params)=>{


     foodService.getFoodById(params.id).subscribe((serverFood)=>{
       this.food = serverFood;
     });
    })

  
    }
  
    addToCart(){
 
       this.cartService.addToCart(this.food);
       this.router.navigateByUrl('/cart-page')

    }

}
