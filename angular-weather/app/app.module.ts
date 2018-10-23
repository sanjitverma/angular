import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent, TwoWayComponent} from './app.component';
import { ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

@NgModule({
    imports: [BrowserModule, ReactiveFormsModule, HttpModule],
    declarations: [AppComponent,TwoWayComponent],
    bootstrap: [AppComponent]
})
export class AppModule {

}