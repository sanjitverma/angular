import {Component} from '@angular/core';
import "rxjs/add/operator/debounceTime";
import {FormControl, FormGroup, FormsModule} from "@angular/forms";

function ssnValidator(control: FormControl): {[key: string]: any} {
    const value: string = control.value || '';
    const valid = value.match(/^\d{9}$/);
    return valid ? null : {ssn: true};
}

@Component({
    selector: 'app',
    template: `
        <div>
            <form #frm="ngForm"  (ngSubmit)="onFormSubit(frm.value)" >
            <div> UserName : <input type="text" name="username" ngModel/>
            </div>
            <div>SSN : <input type="text" name="ssn" ngModel/></div>
            <div ngModelGroup="password">
                <div>Password: <input type="password" name="mpasswd" ngModel/></div>
                <div>Confirm Password: <input type="password" name="cpasswd" ngModel/></div>
            </div>
                <input type="submit" />
            </form>
        </div>
    `
})
export class AppComponent {

    onFormSubit(formGroup: FormGroup){
        console.log(formGroup);

    }

}
