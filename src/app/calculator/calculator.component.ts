import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [MatCardModule, ReactiveFormsModule],
  templateUrl: './calculator.component.html',
  styles: ``
})
export class CalculatorComponent implements OnInit {

  inputStr: any

  ngOnInit(): void {
    this.inputStr = new FormGroup({
      text: new FormControl()
    });
  }


  //This function for print the number in text field and also add the operator in text field.
  buttonClick(buttonElement: any) {
    let buttonText = buttonElement.textContent
    if(this.inputStr.controls.text.value != null){
      this.inputStr.controls.text.setValue(
        this.inputStr.controls.text.value +
        buttonText)
    }
    else{
      this.inputStr.controls.text.setValue(buttonText)
    }
  }


  //This function for clear the input field.
  clearDisplay(){
    this.inputStr.controls.text.setValue("")
  }

  //This function for the result print.
  calculate(){

    let result = eval(this.inputStr.controls.text.value)
    this.inputStr.controls.text.setValue(result)
  }


  //This function for the delete the last number.
  deleteLast(){
    let str = this.inputStr.controls.text.value
    str = str.slice(0,-1)
    this.inputStr.controls.text.setValue(str)
  }

}
