import {Component} from "@angular/core";


@Component({
    selector: 'home',
    template: `
        <div class="home">Home Component
          <input type="text" placeholder="Enter your text here" />
        </div>
    `,
    styles: ['.home {background: red; height: 80px; padding: 15px 0 0 30px; width: 70%}']

})
export class HomeComponent{

}