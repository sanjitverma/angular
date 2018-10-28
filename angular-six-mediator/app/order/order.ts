import {Component, Input} from "@angular/core";


@Component({
    selector: 'stock-order',
    template:`
        <strong>Buying {{ stockSym }} at {{ stockPrc | currency: 'USD' : true : '1.2-2'}} </strong>
    `


})
export class Order {

    private _stockSym: string;
    private _stockPrice: number;


    @Input()
    set stockSym(value : string){
        this._stockSym = value;
    }

    @Input()
    set stockPrc(value: number){
        this._stockPrice = value;
    }

    get stockSym(){
        return this._stockSym;
    }

    get stockPrc(){
        return this._stockPrice;
    }

}