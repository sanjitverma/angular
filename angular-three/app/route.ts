import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home";
import {ProductDetails} from "./product";


const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'product/:id', component: ProductDetails}];

export const routing = RouterModule.forRoot(routes);