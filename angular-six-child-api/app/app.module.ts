import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent, ChildComponent} from './app.component';
import { ReactiveFormsModule} from "@angular/forms";

@NgModule({
    imports: [BrowserModule, ReactiveFormsModule],
    declarations: [AppComponent,ChildComponent],
    bootstrap: [AppComponent]
})
export class AppModule {

}