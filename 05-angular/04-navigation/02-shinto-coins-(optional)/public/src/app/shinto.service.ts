import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShintoService {
  shintoCoin = 0;
  result = 0;
  questions = [
    {
      question: 'What is Big O Notation?',
      answer:
        'Big O notation is used in Computer Science to describe the time complexity of an algorithm.',
    },
    {
      question: 'How can you avoid callback hells?',
      answer:
        'Refactoring the functions to return promises and using async/await is usually the best option.',
    },
    {
      question: 'What is event-driven programming?',
      answer:
        'Event-driven programming is a paradigm that involves building applications that send and receive events.',
    },
    {
      question: 'What is functional programming?',
      answer:
        'Functional programming is a paradigm in which programs are built in a declarative manner using ' +
        'pure functions that avoid shared state and mutable data.',
    },
  ];

  constructor() {}

  getQuestion() {
    return this.questions[Math.floor(Math.random() * this.questions.length)];
  }

  saveShintoCoint(num: number) {
    console.log('Shinto: ', num);
    console.log('this.shintocoin on service: ', this.shintoCoin);

    // tslint:disable-next-line:radix
    this.shintoCoin = parseInt(this.shintoCoin) + parseInt(num);

    console.log('Shinto coinnn: ', this.shintoCoin);
  }

  getShintoCoin() {
    console.log('shintoooo', this.shintoCoin);
    return this.shintoCoin;
  }

  sellShintonCoin(num: number) {
    console.log('Num in sell: ', num);
    console.log('this.shintocoin on service: ', this.shintoCoin);
    if (this.shintoCoin >= 1) {
      this.shintoCoin = parseInt(this.shintoCoin) - parseInt(num);
    }
  }
}
