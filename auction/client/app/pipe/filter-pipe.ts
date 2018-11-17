import {Pipe, PipeTransform} from "@angular/core";
import {Product} from "../services/product-service/product-service";

@Pipe({name: "filter" })
export class FilterPipe implements PipeTransform{

    transform(valueTobeFiltered: Product[], filterByField: string, filterValue: string): any {
        
        if (!filterByField || !filterValue){
            return valueTobeFiltered;
        }
        return valueTobeFiltered.filter( (product) => {
            const filterField =  product[filterByField].toLowerCase();
            const filterV = filterValue.toLocaleLowerCase();
            return filterField.indexOf(filterV) >= 0;
        });
        
    }

}