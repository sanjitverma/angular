import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";


@Component({
    selector: 'product',
    template: `
        <h1 class="home"> Product Details for {{ productId }}} </h1>
    `,
    styles: ['.home {background: cyan}']

})
export class ProductDetails {

    private productId: string;

    constructor(_activatedRoute : ActivatedRoute){
        this.productId = _activatedRoute.snapshot.params['id'];
    }

}