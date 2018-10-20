import {Component, ViewEncapsulation} from "@angular/core";
import {Router} from "@angular/router";


@Component({
    selector: 'page-component',
    template: `
        <h1 class="first">This is First Page...</h1>  
    <a [routerLink]="['/']">Home Page</a>
    <a [routerLink]="['/product', '1234']">Product Info</a>
    <router-outlet></router-outlet>    
    `,
    styles: ['.first { background: coral}'],
    encapsulation: ViewEncapsulation.Native
})
export class PageComponent{

    constructor(private _router: Router){
        _router.navigate(['/']);
    }
}