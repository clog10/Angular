import { Component } from '@angular/core';

@Component({
  templateUrl: './counter.html',
})
export class Counter {
  counter = 10;

  increaseBy(value: number) {
    this.counter += value;
  }

  reset() {
    this.counter = 10;
  }

  decreaseBy(value: number) {
    this.counter -= value;
  }
}
