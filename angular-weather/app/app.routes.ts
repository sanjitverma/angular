import {Routes} from "@angular/router";
import {WeatherComponent} from "./weather.component";
import {HomeComponent} from "./home.component";


export const routes: Routes  = [
    {path: '', component: HomeComponent},
    {path: 'weather', component: WeatherComponent}
]