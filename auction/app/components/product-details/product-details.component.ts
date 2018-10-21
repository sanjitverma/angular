import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'product-details',
    templateUrl: 'app/components/product-details/product-details.html'
})
export class ProductDetailsComponent{
    productTitle: string
    constructor(_activatedRoute: ActivatedRoute){
        this.productTitle = _activatedRoute.snapshot.params['title']
    }
}