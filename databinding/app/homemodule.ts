import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './homecomponent';

@NgModule({
    imports: [ BrowserModule, FormsModule ],
    declarations: [HomeComponent ],
    bootstrap: [ HomeComponent ]
})
export class HomeModule{
}