import { Component } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { Cart } from '../../../shared/models/Cart';
import { CartItem } from '../../../shared/models/CartItem';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TitleComponent } from '../../partials/title/title.component';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CommonModule,RouterLink,TitleComponent],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent {

  cart!: Cart;
 constructor(private cartService: CartService){
this.cartService.getCartObservable().subscribe((cart)=>{

  this.cart = cart; 
     })
   }


   removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
  }
  changeQuantity(cartItem:CartItem,quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
  }


}
