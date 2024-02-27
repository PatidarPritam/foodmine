import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl } from '@angular/forms';
const VALIDATORS_MESSAGE:any = {

  required:'should not be empty',
  email:'Email is not valid'
}

@Component({
  selector: 'input-validation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-validation.component.html',
  styleUrl: './input-validation.component.css'
})
export class InputValidationComponent  implements OnInit ,OnChanges{
  ngOnChanges(changes: SimpleChanges): void {
    this.checkValidation(); 
  }
  ngOnInit(): void {
   this.control.statusChanges.subscribe(()=>{

    this.checkValidation();
    });

    this.control.valueChanges.subscribe(()=>{
      this.checkValidation();
    })
         
  }
@Input()
control!:AbstractControl;
@Input()
showErrorsWhen:boolean =true;
errorMessages: string[] =[];

checkValidation():void{

  const errors = this.control.errors;
  if(!errors){
   this.errorMessages = [];
   return;
  }

  const errorsKey = Object.keys(errors);
  this.errorMessages = errorsKey.map(key=> VALIDATORS_MESSAGE[key]);

}


}
