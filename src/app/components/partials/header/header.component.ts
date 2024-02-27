import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../services/cart.service';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../services/user.service';
import { User } from '../../../shared/User';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  cartQuantity=0;
  user!:User;
  constructor(cartService:CartService,private userService:UserService ) {
    cartService.getCartObservable().subscribe((newCart) => {
      this.cartQuantity = newCart.totalCount;
    })

    userService.userObservable.subscribe((newUser)=>{
      this.user = newUser;
    })
  }

   logout(){
    this.userService.logout()
   }

   get isAuth(){

    return this.user.token;
   }
}

