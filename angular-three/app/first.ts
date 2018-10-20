import {Component, ViewEncapsulation} from "@angular/core";
import {Router} from "@angular/router";


@Component({
    selector: 'page-component',
    template: `        
    <a [routerLink]="['/']">Home Page</a>
    <a [routerLink]="[{outlets : {primary: 'home', aux: 'chat'}}]">Open a chat</a>
    <a [routerLink]="[{outlets: { aux: null}}]">Close Chat </a>
    <router-outlet></router-outlet> 
    <router-outlet name="aux"></router-outlet>    
    `,
    styles: ['.page-component { background: coral}'],
    encapsulation: ViewEncapsulation.Emulated
})
export class PageComponent{

    constructor(private _router: Router){
        _router.navigate(['/']);
    }
}