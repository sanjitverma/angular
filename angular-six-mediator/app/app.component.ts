import {Component, Input} from '@angular/core';
import "rxjs/add/operator/debounceTime";



@Component({
    selector: 'app',
    template: `
        <stock-emitter (stockInformation)="stockEventHandler($event)"></stock-emitter>
        <stock-order [stockSym]="stockSymbolInParent" [stockPrc]="stockPriceInParent"></stock-order>
    `
})
export class AppComponent {

    name: string;
    stockSymbolInParent : string;
    stockPriceInParent: number;
    constructor(){
        this.name = "Anglar 2 Tutorial";
    }

    stockEventHandler(event: any) :void {
        this.stockSymbolInParent = event.stockSymbol;
        this.stockPriceInParent = event.stockPrice;
    }
}
