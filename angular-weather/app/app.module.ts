import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {WEATHER_URL_BASE, WEATHER_URL_SUFFIX, WeatherService} from "./service/weather.service";
import {AppComponent} from "./app.component";
import {WeatherComponent} from "./weather.component";
import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";
import {HomeComponent} from "./home.component";
import {APP_BASE_HREF, HashLocationStrategy, LocationStrategy} from "@angular/common";

@NgModule({
    imports: [BrowserModule,
              ReactiveFormsModule,
              HttpModule,
              RouterModule.forRoot(routes, {enableTracing: true})],
    providers:[
        {provide : WEATHER_URL_BASE, useValue: 'http://api.openweathermap.org/data/2.5/weather?q=' },
        {provide : WEATHER_URL_SUFFIX, useValue: '&units=imperial&appid=ca3f6d6ca3973a518834983d0b318f73'},
        {provide : LocationStrategy, useClass: HashLocationStrategy},
        {provide: APP_BASE_HREF, useValue: '/base'},
        WeatherService],
    declarations: [AppComponent, HomeComponent ,WeatherComponent],
    bootstrap: [AppComponent]
})
export class AppModule {

}