import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NgModule, Component, OnInit} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule, Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ProductService} from "./service/product.service";

class Product{
    id: number;
    title: string;
    price: number;

    constructor(id, title, price){
        this.id = id;
        this.title = title;
        this.price = price;
    }
}

@Component({
    selector: 'http-client',
    template: `

        <h1>Search Product by Id</h1>
        <div>
            <form [formGroup]="formModel" (ngSubmit)="getProduct()">
                <div>Enter product id:</div>
                <div>
                    <input type="text" placeholder="Enter product id" formControlName="id"/>
                </div>
                <input type="submit"/>
            </form>
        </div>
        <div><h1>{{ productTitle }} {{ productPrice }}</h1></div>

    `,
    providers: [ProductService]
})
class AppComponent {


    formModel: FormGroup;
    productTitle: string;
    productPrice: string;

    constructor(private productService: ProductService,builder: FormBuilder) {
        this.formModel = builder.group({
            id : builder.control([])
        });
    }

    getProduct(){
      this.product = this.productService
          .getProduct(this.formModel.value.id)
          .subscribe(data => {
              this.productTitle = data.title;
              this.productPrice = '$' +  data.price;
          });
    }

}

@NgModule({
    imports: [ BrowserModule,
        HttpModule,
        ReactiveFormsModule,
        FormsModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);