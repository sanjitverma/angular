import {Component} from "@angular/core";
import {MockProductService, Product, ProductService} from "./service/product.service";


@Component({
    selector: 'di-product',
    template: `
    <div>
        <h1>Product Details: </h1>
        <h2>Product name: {{ product.name }}</h2>
        <h2>Product price: {{ product.price }} </h2>
        <h2>Product Description: {{ product.desc }}</h2>
    </div>
    `,
    providers: [{
        'provide': ProductService,
        'useFactory': (isDev: boolean) => {
            if (!isDev) {
                return new MockProductService();
            }
            else {
                return new ProductService();
            }
        },
        'deps': ["IS_DEVELOPMENT_MODE"]
    }]


})
export class ProductComponent{

    product: Product;
    constructor(private productService: ProductService){
            this.product = productService.getProduct();
    }
}