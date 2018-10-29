import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from '@angular/core';
import "rxjs/add/operator/debounceTime";


@Component({
    selector: 'stock-order',
    template: `
        <div class="parent">
            Buying {{ quantity }} stock of {{ stockSymbol }}
            <ng-content select=".parent1"></ng-content>
            <ng-content select=".parent2"></ng-content>
        </div>    
    `,
    styles: [` .parent {
        background: #fcba4d
    }`],
    encapsulation: ViewEncapsulation.Native,
    changeDetection: ChangeDetectionStrategy.OnPush

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
        <div class="parent">
            <strong>This content is in parent</strong>
                <stock-order [stockSymbol]="stockSymbolInParent" quantity="100">
                    <div class="parent1">
                        This content has been passed from parent component 1.
                    </div>
                    <div class="parent2">
                        This content has been passed from parent component 2.
                    </div>
                </stock-order>
        </div>   
    `,
    styles: ['.parent { background: #4ad5ff}'],
    encapsulation: ViewEncapsulation.Native

})
export class AppComponent {


    name: string;
    stockSymbolInParent : string = "AAPL";
    constructor(){
        this.name = "Anglar 2 Tutorial";
    }

    onChangeEvent({ target }): void {
        this.stockSymbolInParent = target.value;
    }
}
