import {Component} from "@angular/core";
import {Product, ProductService} from "../../services/product-service/product-service";


@Component({
    selector: 'home',
    templateUrl: 'app/components/home/home.html',
    styleUrls: ['/home.css']
})
export class HomeComponent {
    products: Array<Product> = []; // <1>
    constructor(private productService: ProductService) { // <2>
        this.products = this.productService.getProducts(); // <3>
    }
}