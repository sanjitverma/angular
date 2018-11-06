import {Component} from '@angular/core';
import "rxjs/add/operator/debounceTime";
import {AbstractControl, FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";


function ssnValidator(control: FormControl): {[key : string] : any} {
    const value = control.value || '';
    const valid = value.match(/^\d{9}$/);
    return valid ? null : {ssn : true};

}


@Component({
    selector: 'app',
    template: `
        <div>
            <form [formGroup]="formModel" (ngSubmit)="submitForm()">
                <label>Emails:</label>
                <button type="button" (click)="addEmail()">Add Email</button>
                <div>
                    <ul formArrayName="emails">
                        <li *ngFor=" let e of formModel.get('emails').controls; let i = index ">
                            <input [formControlName]="i">
                        </li>
                    </ul>
                </div>
                <input type="submit"/>
            </form>
            <hr/>
            <label>Form Value:</label>
            <pre>{{ value }}</pre>
        </div>
    `
})



export class AppComponent {

    formModel: FormGroup;

    constructor() {
        this.formModel = new FormGroup({
            emails: new FormArray([
                new FormControl("", [ssnValidator, Validators.minLength(30)])
            ])
        });
    }

    addEmail(){
        const emails = this.formModel.get("emails") as FormArray;
        for (var i = 0; i < emails.length ; i++){
            var control: AbstractControl = emails.controls[i];
            if(!control.valid) {
                console.log(JSON.stringify(control.errors));
                console.log("Invalid value...." + control.value);
            }
        }
        emails.push(new FormControl('', [ssnValidator, Validators.minLength(30)]));
        console.log(this.formModel.value);
    }

    get value() {
        return JSON.stringify(this.formModel.value, null, 4);
    }

    submitForm() {
        console.log(this.formModel.value);
    }

}
