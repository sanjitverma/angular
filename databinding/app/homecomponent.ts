
import { Component } from '@angular/core';

@Component({
    selector: 'binding-sample',
    template: `<button (click) = changeFlag()>Change Value</button>
                <p>Value of flag {{ flag }} </p>
                <span *ngIf="flag">This is span content.</span>
                <br>
                <template [ngIf]="flag">
                    This is template content.
                </template>
                <br>
                <input type="text" placeholder="Enter stock symbol" [(ngModel)] = "stockSymbol" />
                <br> The value of the last stock is {{ stockSymbol }}.
                `
})
export class HomeComponent{
 private flag: boolean;
 private stockSymbol: string;
 constructor(){
     this.flag = true;
     setTimeout(()=>{
            this.stockSymbol = "AAPL";
     },2000);
 }
 changeFlag(){
     this.flag = !this.flag;
 }
}