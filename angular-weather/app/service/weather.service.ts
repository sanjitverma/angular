import {Inject, Injectable, OpaqueToken} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs";

export interface WeatherResult {
    place: string;
    temperature: number;
    humidity: number;
}

export const WEATHER_URL_BASE = new OpaqueToken('WeatherUrlBase');
export const WEATHER_URL_SUFFIX = new OpaqueToken('WeatherUrlSuffix');

@Injectable()
export class WeatherService {

    constructor(private _http: Http,
                @Inject(WEATHER_URL_BASE) private baseUrl: string,
                @Inject(WEATHER_URL_SUFFIX) private suffix: string){}

    getWeather(city: string): Observable<any> {
        return this._http
            .get(this.baseUrl + city + this.suffix)
            .map(res => res.json())
            .filter(this.isvalid)
            .map(this.parseData)
            .catch(err => {
                if (err.status === 404) {
                    console.log(`City ${city} not found`)
                    return Observable.empty();
                }
            });
    }

    isvalid(data): boolean {
        return data['cod'] !== '404' && data.main;
    }

    parseData(data): WeatherResult {
        return {
            place: data.name || 'Unknown',
            temperature: data.main.temp,
            humidity: data.main.humidity
        };
    }


}