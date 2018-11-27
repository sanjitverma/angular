import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";
import {Observable} from "rxjs/Rx";
import {WeatherResult, WeatherService} from "./service/weather.service";


@Component({
    selector: 'weather-app',
    template: `
        <form [formGroup]="formModel" (ngSubmit)="findWeather()">
            <div>
                Enter your city: <input type="text" formControlName="city"/>
            </div>
            <input type="submit" value="Find Weather"/>
        </form>
        <div [hidden]="isHidden">
            <h1>Weather of the city {{ cityWeather?.place }} </h1>
            <h3>Temperature is {{cityWeather?.temperature}}</h3>
            <h3>Humidity is {{cityWeather?.humidity}}</h3>
            <h3></h3>
            <h3></h3>
        </div>
    `
})
export class WeatherComponent {

    formModel: FormGroup;
    isHidden: boolean = true;
    cityWeather: WeatherResult;

    constructor(private weatherService: WeatherService) {
        this.formModel = new FormGroup({
            city: new FormControl()
        });
    }

    findWeather() {
        this.weatherService
            .getWeather(this.formModel.value.city)
            .subscribe(
                res => {
                    this.isHidden = false;
                    this.cityWeather = res;
                    console.log(res);
                },
                err => {
                    this.isHidden = true;
                    console.log(err);
                });
    }

}

