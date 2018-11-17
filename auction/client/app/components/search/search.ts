import {Component} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from "../../services/product-service/product-service";

function positiveNumberValidator(control: AbstractControl): {[key: string] : any} {
    const num = control.value;
    if(num != null){
        const price = parseInt(num);
        return (typeof price === 'number') && (price > 0)  ? null : {positiveNumber: true};
    }
    return null;
}

@Component({
    selector: 'auction-search',
    templateUrl: 'app/components/search/search.html'
})

export default class SearchComponent {
    formModel: FormGroup;
    categories: string[];

    constructor(private productService: ProductService){
        this.categories = this.productService.getAllCategories();
        this.formModel = new FormGroup({
            'title': new FormControl(null, Validators.minLength(3)),
            'price': new FormControl(null, positiveNumberValidator),
            'category': new FormControl(-1)
        });
    }

    onSearch(){
        if (this.formModel.valid){
            console.log("In the search event handler....");
            this.productService.searchEvent.emit(this.formModel.value);
        }
    }
}
