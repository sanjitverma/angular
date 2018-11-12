import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";

@Injectable()
export class ProductService {

    constructor(private _http: Http){
    }

    getProduct(id:string): Observable<string>{
        return this._http
            .get(`/products/${id}`)
            .map(res => res.json());
    }



}