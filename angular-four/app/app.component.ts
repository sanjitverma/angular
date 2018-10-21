import { Component } from '@angular/core';

@Component({
    selector: 'app',
    template: `<h1>Hello {{ name }}!</h1>
    <di-product></di-product>
    `
})
export class AppComponent {
    name: string;
    constructor(){
        this.name = "Anglar 2 Tutorial";
    }
}
