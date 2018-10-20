import {Component} from "@angular/core";
import {Router} from "@angular/router";


@Component({
    selector: 'page-component',
    template: `
        <h1>This is First Page...</h1>  
    <a [routerLink]="['/']">Home Page</a>
    <a [routerLink]="['/product', '1234']">Product Details</a>
    <router-outlet></router-outlet>    
    `
})
export class PageComponent{

    constructor(private _router: Router){
        _router.navigate(['/']);
    }
}