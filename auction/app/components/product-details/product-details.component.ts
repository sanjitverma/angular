import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Product, ProductService, Review} from "../../services/product-service/product-service";

@Component({
    selector: 'product-details',
    templateUrl: 'app/components/product-details/product-details.html'
})
export class ProductDetailsComponent{
    productId: number
    product: Product;
    reviews: Review[];
    constructor(_activatedRoute: ActivatedRoute, private productService: ProductService){
        this.productId = _activatedRoute.snapshot.params['id'];
        this.product = productService.getProductById(this.productId);
        this.reviews = productService.getReviewForProduct(this.productId);
    }
}