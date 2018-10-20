import {Component} from "@angular/core";


@Component({
    selector: 'chat',
    template: `
        <div class="chat">
               <textarea placeholder="Enter message to chat with customer care "></textarea>
        </div>
    `,
    styles: ['.chat { background: aliceblue; height: 80px; width: 30%; font-size: 24px }']
})
export class ChatComponent {

}