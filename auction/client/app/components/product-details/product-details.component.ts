import {Component, OnDestroy} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Product, ProductService, Review} from "../../services/product-service/product-service";
import {BidService} from "../../services/bid.service";
import {Subscription} from "rxjs";

@Component({
    selector: 'product-details',
    templateUrl: 'app/components/product-details/product-details.html'
})
export class ProductDetailsComponent implements OnDestroy{
    productId: number
    product: Product;
    reviews: Review[];
    newRating: number;
    currentBid: number;
    newComment: string;
    isReviewHidden: boolean = true;
    isWatching: boolean = false;
    private subscription: Subscription;


    constructor(_activatedRoute: ActivatedRoute,
                private productService: ProductService,
                private bidService: BidService){

        this.productId = _activatedRoute.snapshot.params['id'];
        productService
            .getProductById(this.productId)
            .subscribe(
            product => {
                    this.product = product;
                    this.currentBid = product.price;
            },
            err => console.error(err)
        );

        productService.getReviewsForProduct(this.productId).subscribe(
                reviews =>{
                    this.reviews = reviews;
                },
            error => console.error(error)
        );
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

    toggleWatchProduct() {
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = null;
            this.isWatching = false;
        } else {
            this.isWatching = true;
            this.subscription = this.bidService.watchProduct(this.product.id)
                .subscribe(
                    products => this.currentBid = products.find((p: any) => p.productId === this.product.id).bid,
                    error => console.log(error));
        }
    }

    ngOnDestroy(): void {
        if(this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}