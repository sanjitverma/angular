import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent, TwoWayComponent} from './app.component';
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent,TwoWayComponent],
    bootstrap: [AppComponent]
})
export class AppModule {

}