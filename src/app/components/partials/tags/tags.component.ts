import { Component } from '@angular/core';
import { Tag } from '../../../shared/Tag';
import { FoodService } from '../../../services/food.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent {

  tags?:Tag[];
    
  constructor(foodService:FoodService){

    this.tags = foodService.getAllTags();
  }
  
  
}
