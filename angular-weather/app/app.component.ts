import { Component } from '@angular/core';
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";
import {Observable} from "rxjs/Rx";
import {HttpModule, Http} from "@angular/http";


@Component({
    selector: 'weather-app',
    template: `
        <input type="text" placeholder="Enter your city name here" [formControl]="searchTemp">
        <p>Temperature is {{ temperature }} </p>
    `

})
export class TwoWayComponent{

    private baseWeatherURL: string= 'http://api.openweathermap.org/data/2.5/weather?q=';
    // If the below API key doesn't work request your own key at http://api.openweathermap.org
    private urlSuffix: string = "&units=imperial&appid=ca3f6d6ca3973a518834983d0b318f73";
    searchTemp: FormControl = new FormControl();
    temperature: string;

    constructor(private http: Http){

        this.searchTemp.valueChanges
            .debounceTime(200)
            .switchMap(city => this.getWeather(city))
            .subscribe(
                res => {
                    this.temperature =
                        `Current temperature is  ${res['main'].temp}F, ` +
                        `humidity: ${res['main'].humidity}%`;
                },
                err => console.log(`Can't get weather. Error code: %s, URL: %s`, err.message, err.url)
            );
    }


    getWeather(city: string): Observable<Array<string>> {
        return this.http.get(this.baseWeatherURL+ city + this.urlSuffix)
            .map(res => {
                console.log(res.json());
                return res.json()})
            .catch( err => {
                if (err.status ===404){
                    console.log(`City ${city} not found`) ;
                    return Observable.of()}    // empty observable
            });
    }
}


@Component({
    selector: 'app',
    template: `<weather-app></weather-app>
    `
})
export class AppComponent {
    name: string;
    constructor(){
        this.name = "Anglar 2 Tutorial";
    }
}
