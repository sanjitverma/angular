import {Component, ViewEncapsulation} from "@angular/core";
import {ActivatedRoute} from "@angular/router";


@Component({
    selector: 'product',
    template: `
        <h1 class="home"> Product Details for {{ productId }} </h1>
        <router-outlet></router-outlet>
        <a routerLink="['/seller', '8888']">Seller Info</a>
    `,
    styles: ['.home {background: blue}'],
    encapsulation: ViewEncapsulation.Native

})
export class ProductComponent {

    productId : string;

    constructor(_activatedRoute: ActivatedRoute){
        this.productId = _activatedRoute.snapshot.params['id'];
    }

}