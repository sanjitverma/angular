import {Component, Input} from '@angular/core';
import "rxjs/add/operator/debounceTime";


@Component({
    selector: 'stock-order',
    template: `
        Buying {{ quantity }} stock of {{ stockSymbol }}
    `,
    styles: [` :host {background: lawngreen}`]

})
export class TwoWayComponent{

    private _stockSymbol: string;
    @Input()
    quantity : string;

    @Input()
    set stockSymbol(value: string){
        if(value != undefined){
            this._stockSymbol = value;
            console.log('Received the stock ' + this._stockSymbol);
        }
    }

    get stockSymbol(){
        return this._stockSymbol;
    }

}


@Component({
    selector: 'app',
    template: `
        <input type="text" placeholder="Enter the stock value e.g: IBM" (change)="onChangeEvent($event)"/>
        <stock-order [stockSymbol]="stockSymbolInParent" quantity="100"></stock-order>
    `
})
export class AppComponent {


    name: string;
    stockSymbolInParent : string;
    constructor(){
        this.name = "Anglar 2 Tutorial";
    }

    onChangeEvent({ target }): void {
        this.stockSymbolInParent = target.value;
    }
}
