import {Component, EventEmitter, Output} from "@angular/core";
import {Stock} from "../stock/stock";


@Component({
    selector: 'stock-emitter',
    template:`
        <strong>In the stock emitter</strong>
        <br>
        <br>
        Stock {{ stockS }} is at {{ stockP | currency: 'USD' : true : '1.2-2' }}
        <input type="button" value="Buy" (click)="sendStockValue()" />
        
    `,
    styles: [' :host { background: #a51434; padding: 5px 15px 15px 15px}']

})
export class StockEmitter{

    stockS: string = "AAPL";
    stockP: number;

    @Output()
    stockInformation : EventEmitter<Stock> = new EventEmitter();

    constructor(){
        setInterval(() => {
                this.stockP = 100 * Math.random()
            }, 2000);
    }

    sendStockValue(){
        let stockInstance: Stock = {
            stockSymbol : this.stockS,
            stockPrice : this.stockP
        };
        this.stockInformation.emit(stockInstance);
    }
}