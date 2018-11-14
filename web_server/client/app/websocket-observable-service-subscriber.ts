import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, Component }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import 'rxjs/add/operator/map';
import {WebsocketObservableService} from "./websocket-observable-service";


@Component({
    selector: 'app',
    providers: [ WebsocketObservableService ],
    template: `<h1>Websocket Subscriber</h1>
       Message from Server : {{ serverMessage }}
       <div>
           <button (click)="submitMessage('Hello Server, this your client...')">Submit</button>
       </div> 
  `})
class AppComponent {
    serverMessage: string;
    constructor(private websocketService: WebsocketObservableService) {
        this.websocketService.createWebSocketObservable('ws://localhost:8085')
            .subscribe( data => this.serverMessage = data );
    }

    submitMessage(message: string){
        this.websocketService.sendMessage(message);
    }
}

@NgModule({
    imports:      [ BrowserModule],
    declarations: [ AppComponent],
    bootstrap:    [ AppComponent ]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);