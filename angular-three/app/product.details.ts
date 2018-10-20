import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";


@Component({
    selector: 'product-details',
    template: `
        <h1 class="product-details"> This product is really good!</h1>
    `,
    styles: ['.product-details {background: lawngreen}']

})
export class ProductDetailsComponent {

    private productId: string;

    constructor(_activatedRoute : ActivatedRoute){
        this.productId = _activatedRoute.snapshot.params['id'];
    }

}