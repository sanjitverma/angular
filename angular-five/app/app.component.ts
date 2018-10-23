import { NgModule,Component } from '@angular/core';
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import "rxjs/add/operator/debounceTime";


@Component({
    selector: 'two-way',
    template: `
    <input type="text" placeholder="Enter your stock here" [formControl]="searchStock">
    <p> The stock price of {{ searchStock.value }} is  {{ stockPrice }}</p>    
    `

})
export class TwoWayComponent{

    searchStock: FormControl = new FormControl("");
    stockPrice: number;
    constructor(){
        this.searchStock
            .valueChanges
            .debounceTime(500)
            .subscribe(stock => this.getStockPrice(stock));
    }

    getStockPrice(stock: string): void {
        this.stockPrice = 100 * Math.random();
    }
}


@Component({
    selector: 'app',
    template: `<two-way></two-way>
    `
})
export class AppComponent {
    name: string;
    constructor(){
        this.name = "Anglar 2 Tutorial";
    }
}
