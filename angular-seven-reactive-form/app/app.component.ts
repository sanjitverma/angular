import {Component} from '@angular/core';
import "rxjs/add/operator/debounceTime";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
    selector: 'app',
    template: `
        <div>
            <form [formGroup]="formModel" (ngSubmit)="submitForm()">
                <div> UserName : <input type="text" formControlName="uerName"></div>
                <div>SSN : <input type="text" formControlName="ssn"></div>
                <div formGroupName="passWord">
                    <div>Password: <input type="password" formControlName="mpasswd"/></div>
                    <div>Confirm Password: <input type="password" formControlName="cpasswd"/></div>
                </div>
                <input type="submit"/>
            </form>
        </div>
    `
})
export class AppComponent {

    formModel: FormGroup;

    constructor() {
        this.formModel = new FormGroup({
            uerName: new FormControl("Sanjit"),
            ssn: new FormControl("123456"),
            passWord: new FormGroup({
                mpasswd: new FormControl('1111'),
                cpasswd: new FormControl('1111')
            })
        });
    }

    submitForm(){
        console.log(this.formModel.value);
    }

}
