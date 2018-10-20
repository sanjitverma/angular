import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home";
import {ProductComponent} from "./product";
import {SellerCommponent} from "./seller";
import {ProductDetailsComponent} from "./product.details";


const routes: Routes = [
    {path: '', component: HomeComponent},
    {
        path: 'product/:id', component: ProductComponent,
        children: [
            {path: '', component: ProductDetailsComponent},
            {path: 'seller/:id', component: SellerCommponent}]
    }];

export const routing = RouterModule.forRoot(routes);