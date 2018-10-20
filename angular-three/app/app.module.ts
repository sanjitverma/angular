import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HomeComponent} from "./home";
import {ProductComponent} from "./product";
import {routing} from "./route";
import {APP_BASE_HREF, HashLocationStrategy, LocationStrategy} from "@angular/common";
import {PageComponent} from "./first";
import {ProductDetailsComponent} from "./product.details";
import {SellerCommponent} from "./seller";
import {LoginGuard} from "./login.guard";

@NgModule({
    imports: [BrowserModule, routing],
    declarations: [HomeComponent, ProductComponent, PageComponent, ProductDetailsComponent, SellerCommponent],
    bootstrap: [PageComponent],
    providers: [{provide : LocationStrategy, useClass : HashLocationStrategy},
        {
            provide : APP_BASE_HREF, useValue : '/home'
        },
        LoginGuard]
})
export class AppModule {

}