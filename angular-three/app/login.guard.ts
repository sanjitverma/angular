import {CanActivate} from "@angular/router";


export class LoginGuard implements CanActivate{

    loggedIn : boolean;

    canActivate(){
        return this.ifLoggedin();
    }

    private ifLoggedin(){
        this.loggedIn = Math.random() > .5;

        if(!this.loggedIn){
            console.log("User not logged in, cannot navigate....")
        }
     return this.loggedIn;
    }



}