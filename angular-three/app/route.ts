import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home";
import {ProductComponent} from "./product";
import {SellerCommponent} from "./seller";
import {ProductDetailsComponent} from "./product.details";
import {LoginGuard} from "./login.guard";
import {ChatComponent} from "./chat";


const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'chat', component: ChatComponent, outlet: 'aux'},
    {
        path: 'product/:id', component: ProductComponent,
        children: [
            {path: '', component: ProductDetailsComponent},
            {path: 'seller/:id', component: SellerCommponent}]
    }];

export const routing = RouterModule.forRoot(routes);