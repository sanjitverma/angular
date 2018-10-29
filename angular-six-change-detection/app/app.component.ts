import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import "rxjs/add/operator/debounceTime";


@Component({
    selector: 'child',
    template: `
        <div class="child">
            <strong>Child</strong> 
            <div>
                Greeting : {{ greet }} 
            </div>    
            <br/>
            <div>
                User : {{ user.name }}
            </div>
        </div>
    `,
    styles: [` .child {background: lawngreen}`]

})
export class TwoWayComponent implements OnChanges{


    private _greet: string;
    private _user: {name:string};


    get greet(): string {
        return this._greet;
    }
    @Input()
    set greet(value: string) {
        this._greet = value;
    }


    get user(): { name: string } {
        return this._user;
    }
    @Input()
    set user(value: { name: string }) {
        this._user = value;
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log(JSON.stringify(changes, null, 2));
    }
}


@Component({
    selector: 'app',
    template: `
        <div class="parent">
        <strong>Parent</strong>
        <div>
            <div>
                <label> Greeting :</label>
                <input type="text" [value]="greeting" (change)="greeting = $event.target.value " />
            </div>    
            <br>
            <div>
                <label>User Name: </label>
                <input type="text" [value]="user" (change)="user.name = $event.target.value" />
            </div>
            <div>
                <child [greet] = "greeting" [user] = "user"></child>
            </div>
        </div>
        </div>
    `,
    styles: ['.parent {background: coral}']

})
export class AppComponent {

    greeting: string;
    user : {name : string} = {name: "Alex"};

}
