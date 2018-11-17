import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import ApplicationComponent from './components/application/application';
import CarouselComponent from "./components/carousel/carousel";
import FooterComponent from "./components/footer/footer";
import NavbarComponent from "./components/navbar/navbar";
import ProductItemComponent from "./components/product-item/product-item";
import SearchComponent from "./components/search/search";
import StarsComponent from "./components/stars/stars";
import {ProductService} from "./services/product-service/product-service";
import {RouterModule} from "@angular/router";
import {ProductDetailsComponent} from "./components/product-details/product-details.component";
import {HomeComponent} from "./components/home/home.component";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FilterPipe} from "./pipe/filter-pipe";
import {HttpModule} from "@angular/http";
import {BidService} from "./services/bid.service";
import {WebSocketService} from "./services/websocket.service";

@NgModule({
    imports:      [ BrowserModule, RouterModule.forRoot([
        {path: '', component: HomeComponent},
        {path: 'products/:id', component: ProductDetailsComponent}
    ]), ReactiveFormsModule, FormsModule, HttpModule],
    declarations: [ ApplicationComponent,
                    CarouselComponent,
                    FooterComponent,
                    NavbarComponent,
                    ProductItemComponent,
                    SearchComponent,
                    StarsComponent,
                    ProductDetailsComponent,
                    HomeComponent, FilterPipe],
    providers:    [ProductService,
                    BidService,
                    WebSocketService,
                    {provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap:    [ ApplicationComponent ]
})
export class AppModule { }