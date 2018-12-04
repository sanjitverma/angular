import {Component} from "@angular/core";

@Component({
    selector: 'app',
    template: `
        <nav>
            <a routerLink="/">This is Home Component</a>
            <a routerLink="/weather">Weather Service</a>
        </nav>
        <router-outlet></router-outlet>
    `
})
export class AppComponent {
    name: string;
    constructor(){
        this.name = "Anglar 2 Tutorial";
    }
}