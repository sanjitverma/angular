import { Component } from '@angular/core';


@Component({
    selector: 'binding-sample',
    template: `<h1>This is {{ excercise }} sample</h1>
                <button (click) = inputHandler($event)> Click Me </button> 
                <br>
                <input type="text" 
                [value]= "excercise" 
                [attr.value] = "excercise"
                (input) = inputHandler($event) required/>
                `
})
export class HomeComponent{
 private excercise: string;
 constructor(){
     this.excercise = "Binding properties..";
 }

 inputHandler(event: Event): void {
     this.excercise = " The text is upddated...";
     let inputElement: HTMLInputElement = event.target;

     console.log("Input elements attribute value : " + inputElement.getAttribute('value'));
     console.log("Input elements property value :" + inputElement.value);
     console.log("Excercise property value: " + this.excercise);
 }


}