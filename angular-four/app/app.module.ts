import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {ProductComponent} from "./product.component";
import {HttpModule} from "@angular/http";

@NgModule({
    imports: [BrowserModule, HttpModule],
    declarations: [AppComponent,ProductComponent],
    bootstrap: [AppComponent],
    providers: [{'provide': "IS_DEVELOPMENT_MODE", 'useValue': true}]
})
export class AppModule {

}