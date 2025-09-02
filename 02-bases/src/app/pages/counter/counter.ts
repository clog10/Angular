import { Component, signal } from '@angular/core';
import { App } from "../../app";

@Component({
  templateUrl: './counter.html',
  imports: [App],
})
export class Counter {
  counter = 10;

  counterSignal = signal(10);

  increaseBy(value: number) {
    this.counter += value;
    this.counterSignal.update(current => current + value);
  }

  reset() {
    this.counter = 0;
    this.counterSignal.set(0);
  }

  decreaseBy(value: number) {
    this.counter -= value;
    this.counterSignal.update(current => current - value);
  }
}
