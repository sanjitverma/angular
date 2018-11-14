import {Observable} from "rxjs";


export class WebsocketObservableService{
    ws: WebSocket;
    createWebSocketObservable(url: string) : Observable<any>{
        this.ws = new WebSocket(url);
        return new Observable(
            observer => {
                this.ws.onmessage = (event) => observer.next(event.data);
                this.ws.onerror = (event) => observer.error(event.error);
                this.ws.onclose = (event) => observer.complete();
            }
        );
    }

    sendMessage(message: string){
        this.ws.send(message);
    }

}