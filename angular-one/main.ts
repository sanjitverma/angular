import {Component} from '@angular/core';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {Directive, ElementRef, Renderer} from '@angular/core';
// Component
@Component({
  selector: 'hello-world',
  template: `<h1>Hello {{ name }}!</h1>
  <input type="text" log-directive/>`
})
class HelloWorldComponent {
  name: string;

  constructor() {
    this.name = 'Sanjit';
  }
}

@Directive({
    selector: 'input[log-directive]',
    host: {
        '(input)': 'onInput($event)'
    }    
})
export class LogDirective{
    onInput(event){
         console.log(event.target.value);   
    }
}


// Module
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ HelloWorldComponent, LogDirective ],
  bootstrap:    [ HelloWorldComponent ]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
