import { Component, computed, signal } from '@angular/core';
import { App } from '../../app';
import { UpperCasePipe } from '@angular/common';

@Component({ templateUrl: './hero.html', imports: [App, UpperCasePipe] })
export class Hero {
  name = signal('Ironman');
  age = signal(45);

  heroDescription = computed(() => {
    const description = `${this.name()} - ${this.age()}`;
    return description;
  });

  capitalizeName = computed(() => {
    const upperName = this.name().toUpperCase();
    return upperName;
  });

  getHeroDescription() {
    return `${this.name()} - ${this.age()}`;
  }

  changeHero() {
    this.name.set('Spiderman');
    this.age.set(30);
  }

  resetForm() {
    this.name.set('Ironman');
    this.age.set(45);
  }

  changeAge() {
    this.age.set(60);
  }

}
