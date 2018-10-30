import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Product, ProductService, Review} from "../../services/product-service/product-service";
import {NgModule} from "@angular/core";

@Component({
    selector: 'product-details',
    templateUrl: 'app/components/product-details/product-details.html'
})
export class ProductDetailsComponent{
    productId: number
    product: Product;
    reviews: Review[];
    newRating: number;
    newComment: string;
    isReviewHidden: boolean = true;
    constructor(_activatedRoute: ActivatedRoute, private productService: ProductService){
        this.productId = _activatedRoute.snapshot.params['id'];
        this.product = productService.getProductById(this.productId);
        this.reviews = productService.getReviewForProduct(this.productId);
    }


    addReview(){

            let reviewId: number = this.reviews.map(r => r.id)
                .reduce( (sum,id) => {
                    return sum = sum + id;
                }, 0);

            let avgRating = ((this.reviews.length*this.product.rating) + this.newRating ) / (this.reviews.length +1);
            this.product.rating = avgRating;
            let newReview: Review = new Review(reviewId, this.productId, new Date(), "anonymous", this.newRating, this.newComment);
            this.reviews = [...this.reviews, newReview];
            this.isReviewHidden = true;

            this.resetForm();
    }

    resetForm() {
        this.newRating = 0;
        this.newComment = null;
        this.isReviewHidden = true;
    }
}