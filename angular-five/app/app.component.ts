import { NgModule,Component } from '@angular/core';


@Component({
    selector: 'two-way',
    template: `
    <input type="text" [(ngModel)]="inputValue"/>
    <p> The value of inputValue variable is {{ inputValue }}</p>    
    `

})
export class TwoWayComponent{

    inputValue: string;
    constructor(){

        setTimeout(() => {
            this.inputValue = "AAPL";
        }, 2000)

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
