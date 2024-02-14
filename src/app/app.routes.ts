import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';

export const routes: Routes = [
    
   
    {
       path:'search/:searchTerm',
      component:HomeComponent
    },
     {
         path:'',
      component:HomeComponent
   
     },
     { path:'tag/:tag',
       component:HomeComponent

     },
     {
      path:'food/:id',
      component:FoodPageComponent
     }


    

];
