import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent, StockInformationDispatcher} from './app.component';
import { ReactiveFormsModule} from "@angular/forms";

@NgModule({
    imports: [BrowserModule, ReactiveFormsModule],
    declarations: [AppComponent,StockInformationDispatcher],
    bootstrap: [AppComponent]
})
export class AppModule {

}