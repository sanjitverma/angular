import {Component, EventEmitter, Output} from '@angular/core';
import "rxjs/add/operator/debounceTime";


interface Stock {
    stockSymbol: string;
    stockPrice: number;
}


@Component({
    selector: 'stock-info',
    template: `        
        <strong>In the Stock Component </strong>
        Price of the stock is {{ price | currency : USD : true : '1.2-2'}} 
        <br>
    `,
    styles: [` :host {background: lawngreen}`]

})
export class StockInformationDispatcher{

    @Output()
    stockInfo : EventEmitter<Stock> = new EventEmitter();
    price : number;
    constructor() {
        setInterval(() => {
            let stockInformation: Stock = {
                stockSymbol: "IBM",
                stockPrice: 100 * Math.random()
            }
            this.price = stockInformation.stockPrice;
            this.stockInfo.emit(stockInformation);
        }, 2000);
    }
}


@Component({
    selector: 'app',
    template: `
        <stock-info (stockInfo)="stockEventHandler($event)"></stock-info>
        The price of {{ stockN }}, as received from child is {{ stockP | currency: USD : true : '1.2-2' }}
    `
})
export class AppComponent {
    stockN: string;
    stockP: number;

    stockEventHandler( event: any){
        this.stockN = event.stockSymbol;
        this.stockP = event.stockPrice;
    }

}
