import { Injectable } from '@angular/core';
import { Food } from '../shared/modals/Food';
import { sample_foods } from '../../data';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }


  getAll():Food[]{
    return sample_foods;
  }
}
