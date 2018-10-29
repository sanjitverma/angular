import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import "rxjs/add/operator/debounceTime";


@Component({
    selector: 'child',
    template: `
        Greet Message {{ greetMessage }}
        <br/>
    `,
    styles: [` :host {background: lawngreen}`]

})
export class ChildComponent{

       greetMessage: string;

        greeting(message: string):void{
            this.greetMessage = message;
        }
}


@Component({
    selector: 'app',
    template: `
        <child #child1></child>
        <child #child2></child>
        <div (click)="child2.greeting('Hello, Child!')"><STRONG>Click to send message to child</STRONG></div>
    `
})
export class AppComponent implements AfterViewInit{


    @ViewChild('child1')
    child:ChildComponent;

    ngAfterViewInit(): void {
        this.child.greeting("Hello, from Parent");
    }
}
