import {Observable} from "rxjs";


export class WebsocketObservableService{
    private ws: WebSocket;
    createWebSocketObservable(url: string) : Observable<any>{
        this.ws = new WebSocket(url);
        return new Observable(
            observer => {
                this.ws.onmessage = function(event) {
                    observer.next(event.data)
                };
                this.ws.onerror = function(event) {
                    observer.error(event.error);
                };
                this.ws.onclose = function(event) {
                    observer.complete();
                };
            }
        );
    }

    sendMessage(message: string){
        this.ws.send(message);
    }

}