import {Component} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from "../../services/product-service/product-service";

function positiveNumberVlaidator(control: AbstractControl): {[key: string] : any} {
    const num = control.value;
    if(num != null){
        const price = parseInt(num);
        return (typeof price === 'number') && (price > 0)  ? null : {positiveNumber: true};
    }
    return null;
}

@Component({
    selector: 'auction-search',
    templateUrl: 'app/components/search/search.html',
    providers: [ProductService]
})

export default class SearchComponent {
    formModel: FormGroup;
    categories: string[];

    constructor(productService: ProductService){
        this.categories = productService.getProductCategory();
        this.formModel = new FormGroup({
            'title': new FormControl(null, Validators.minLength(3)),
            'price': new FormControl(null, positiveNumberVlaidator),
            'category': new FormControl(-1)
        });
    }

    searchValue({ value } : FormGroup){
        console.log(JSON.stringify(value));
    }
}
