import {Component} from "@angular/core";


@Component({
    selector: 'page-component',
    template: `
        <h1>This is First Page...</h1>  
    <a [routerLink]="['/']">Home Page</a>
    <a [routerLink]="['/product']">Product Details</a>
    <router-outlet></router-outlet>    
    `
})
export class PageComponent{

}