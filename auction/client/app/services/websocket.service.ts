import {Observable, Subscriber} from "rxjs";

export class WebSocketService {
    ws: WebSocket;
    //Socket is open
    readonly socketIsOpen: number = 1;
    createObservableWebSocket(url: string, subscriber: Subscriber): Observable<any>{
        this.ws = new WebSocket(url);
        return new Observable( observer => {
            this.ws.onmessage = (event) => observer.next(event.data);
            this.ws.onerror = (event) => observer.error(event.error);
            this.ws.onclose = (event) => observer.complete();

            this.ws.onopen = (event) => {
                subscriber.next();
                subscriber.complete();
            }

            // Callback invoked on unsubscribe
            return () => this.ws.close(1000, "The user disconnected");
        });
    }

    send(message: any) : string {
        if(this.ws.OPEN === this.socketIsOpen) {
            this.ws.send(JSON.stringify(message));
            return `Message sent to server: ${message}`;
        } else {
            return "Socket closed, cannot send message to server..";
        }
    }
}