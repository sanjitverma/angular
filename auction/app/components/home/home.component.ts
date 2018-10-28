import {Component, setTestabilityGetter} from "@angular/core";
import {Product, ProductService} from "../../services/product-service/product-service";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import 'rxjs/add/operator/debounceTime';
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/map";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/filter";
import {FilterPipe} from '../../pipe/filter-pipe';

@Component({
    selector: 'home',
    templateUrl: 'app/components/home/home.html',
    styleUrls: ['/home.css']
})
export class HomeComponent {

    titleFilter: FormControl = new FormControl();
    products: Array<Product> = []; // <1>
    filterCriteria: string;
    constructor(private productService: ProductService) { // <2>
        this.products = this.productService.getProducts(); // <3>

        this.titleFilter
            .valueChanges
            .debounceTime(500)
            .subscribe((titleValue)=> {
                this.filterCriteria = titleValue;
            });
    }

}