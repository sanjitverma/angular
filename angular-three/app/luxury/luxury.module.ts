import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {LuxuryComponent} from "./luxury.component";




const routes: Routes = [{
    path: 'luxury', component: LuxuryComponent
}]


@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    declarations: [LuxuryComponent]
})
export class LuxuryModule {
}
