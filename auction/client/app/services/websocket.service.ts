import {Observable, Subscriber} from "rxjs";

export class WebSocketService {
    ws: WebSocket;
    createObservableWebSocket(url: string, openSubscriber: Subscriber): Observable<any>{
        this.ws = new WebSocket(url);
        return new Observable( observer => {
            this.ws.onmessage = (event) => observer.next(event.data);
            this.ws.onerror = (event) => observer.error(event.error);
            this.ws.onclose = (event) => observer.complete();
            this.ws.onopen = () =>  {
                openSubscriber.next();
                openSubscriber.complete();
            };
            return () => this.ws.close();
        } );
    }

    send(message: any) {
        this.ws.send(JSON.stringify(message));
    }
}