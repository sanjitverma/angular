import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from './app.component';
import { ReactiveFormsModule} from "@angular/forms";
import {StockEmitter} from "./provider/stock.emitter";
import {Order} from "./order/order";

@NgModule({
    imports: [BrowserModule, ReactiveFormsModule],
    declarations: [AppComponent,StockEmitter,Order],
    bootstrap: [AppComponent]
})
export class AppModule {

}