import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HomeComponent} from "./home";
import {ProductDetails} from "./product";
import {routing} from "./route";
import {APP_BASE_HREF, HashLocationStrategy, LocationStrategy} from "@angular/common";
import {PageComponent} from "./first";

@NgModule({
    imports: [BrowserModule, routing],
    declarations: [HomeComponent, ProductDetails, PageComponent],
    bootstrap: [PageComponent],
    providers: [{provide : LocationStrategy, useClass : HashLocationStrategy},
        {
            provide : APP_BASE_HREF, useValue : '/home'
        }]
})
export class AppModule {

}