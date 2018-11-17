import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'; // <1>
@Component({
  selector: 'auction-stars',
  templateUrl: 'app/components/stars/stars.html',
  styles: [` .starrating { color: #d17581; }`]
})
export default class StarsComponent implements OnInit {
    @Input() count: number = 5; // <1>
    @Input() rating: number = 0; // <2>
    @Input() readonly: boolean;
    stars: boolean[] = []; // <3>
    @Output() ratingChange: EventEmitter<number> = new EventEmitter();
  ngOnInit() { // <4>
    for (let i = 1; i <= this.count; i++) {
      this.stars.push(i <= this.rating);
    }
  }

    fillStarsWithColor(index) {
        if (!this.readonly) {
            this.rating = index + 1;
            this.ratingChange.emit(this.rating);
        }
    }
}