import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent, TwoWayComponent} from './app.component';
import { ReactiveFormsModule} from "@angular/forms";

@NgModule({
    imports: [BrowserModule, ReactiveFormsModule],
    declarations: [AppComponent,TwoWayComponent],
    bootstrap: [AppComponent]
})
export class AppModule {

}