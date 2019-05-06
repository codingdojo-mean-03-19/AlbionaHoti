import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-minecoins',
  templateUrl: './minecoins.component.html',
  styleUrls: ['./minecoins.component.css'],
})
export class MinecoinsComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  constructor(private _shintoService: ShintoService) {}
  question: string;
  result = {
    answer: '',
    question: '',
  };
  resultOne;
  answer: string;
  error: string;
  shintoCoin = 0;

  ngOnInit() {
    const shintoObservable = this._shintoService.getQuestion();
    this.resultOne = shintoObservable;
    this.question = shintoObservable.question;
    console.log(shintoObservable.question);

    const shinto = this._shintoService.getShintoCoin();
    console.log('asdasdas', shinto);
    this.shintoCoin = shinto;
  }
  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();

    console.log('submit', this.result.answer);
    if (
      this.resultOne.question === this.question &&
      this.resultOne.answer === this.result.answer
    ) {
      this.answer = 'Your answer is correct: ' + this.result.answer;
      // this.shintoCoin += 1;
      // console.log('hooh', this.shintoCoin);
      this._shintoService.saveShintoCoint(1);
    } else {
      this.error = 'Wrong answer!';
    }
  }
}
