import {Component, setTestabilityGetter} from "@angular/core";
import {Product, ProductService} from "../../services/product-service/product-service";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import 'rxjs/add/operator/debounceTime';
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/map";
import "rxjs/add/operator/filter";
import { Observable } from "rxjs";
import { filter, map} from 'rxjs/operators';

@Component({
    selector: 'home',
    templateUrl: 'app/components/home/home.html',
    styleUrls: ['/home.css']
})
export class HomeComponent {

    titleFilter: FormControl = new FormControl();
    products: Array<Product> = []; // <1>
    constructor(private productService: ProductService) { // <2>
        this.products = this.productService.getProducts(); // <3>
        this.titleFilter
            .valueChanges
            .debounceTime(200)
            .switchMap( title => this.filterProduct(title))
            .subscribe( res => {
                if (res.length > 0){
                    this.products = res;
                }
                 else {
                     this.products = this.productService.getProducts();
                }
            },
                err => console.log(`Cannot obtain filtered product`, err.message));
        console.log("In constructor before subscription...");
    }

    filterProduct(title: string): Observable<Product[]>{
           console.log("In actual filtering....");
            return Observable.from(this.products).filter(
               p => ((title.length > 0)
                        && (p.title.toLocaleLowerCase().indexOf(title) >=0))).toArray();

     }

}