import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home";
import {ProductComponent} from "./product";
import {SellerCommponent} from "./seller";
import {ProductDetailsComponent} from "./product.details";
import {LoginGuard} from "./login.guard";


const routes: Routes = [
    {path: '', component: HomeComponent},
    {
        path: 'product/:id', component: ProductComponent,
        children: [
            {path: '', component: ProductDetailsComponent},
            {path: 'seller/:id', component: SellerCommponent}],
        canActivate: [LoginGuard]
    }];

export const routing = RouterModule.forRoot(routes);