import {Component} from "@angular/core";
import {Product, ProductService} from "../../services/product-service/product-service";
import {Observable} from "rxjs";

@Component({
    selector: 'home',
    templateUrl: 'app/components/home/home.html',
    styleUrls: ['/home.css']
})
export class HomeComponent {

    products: Observable<Product[]> ; // <1>

    constructor(private productService: ProductService) { // <2>

        this.products = this.productService.getProducts(); // <3>
        this.productService.searchEvent.subscribe(

            params => {
                console.log("Subscribing to " + params.value);
                this.products = this.productService.search(params);
            },
            err =>  console.log("Can't get products. Error code: %s, URL: %s "),
            () => console.log('DONE')
        )
    }
}