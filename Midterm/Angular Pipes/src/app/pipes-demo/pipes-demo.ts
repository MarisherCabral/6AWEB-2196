import { Component } from '@angular/core';
import { CommonModule, DatePipe, AsyncPipe, SlicePipe, CurrencyPipe, DecimalPipe, PercentPipe, UpperCasePipe, JsonPipe } from '@angular/common';
import { interval } from 'rxjs';

@Component({
  selector: 'app-pipes-demo',
  standalone: true,
  imports: [CommonModule, DatePipe, AsyncPipe, SlicePipe, CurrencyPipe, DecimalPipe, PercentPipe, UpperCasePipe, JsonPipe],
  templateUrl: './pipes-demo.html',
  styleUrls: ['./pipes-demo.css']
})
export class PipesDemo {
  presentDate = new Date();
  time$ = interval(1000); // emits every second

  // Currency and Decimal
  amount = 1234.56;
  price = 123.456;
  completion = 0.85;

  // Text
  text = 'angular pipes demo';
  shouting = 'HELLO WORLD';

  // Array
  fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grapes'];

  // JSON object
  person = {
    name: 'Marisher',
    age: 21,
    location: { city: 'Angeles', country: 'Philippines' },
    hobbies: ['Reading', 'Swimming', 'Traveling']
  };
}
