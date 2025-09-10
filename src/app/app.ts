import { Component, signal } from '@angular/core';
import {MyHeader} from './my-header/my-header';
import {MyFooter} from './my-footer/my-footer';


@Component({
  selector: 'app-root',
  imports: [
    MyHeader,
    MyFooter
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  diceValue: number = 1;

  getRandonDiceValue(): number{
    return Math.floor(Math.random() * 6) + 1;
  }

  onRollDice(): void {
    this.diceValue = this.getRandonDiceValue();
  }
}
