import { Component } from '@angular/core';
import {MyHeader} from './my-header/my-header';
import {MyFooter} from './my-footer/my-footer';
import {RollData} from './roll-data';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [
    MyHeader,
    MyFooter,
    FormsModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  rollData: RollData | undefined;
  numberOfDice: number = 3;

  private getRandomDiceValue(): number{
    return Math.floor(Math.random() * 6) + 1;
  }

  private getRollData(numberOfDice: number): RollData{
    const values: number[] = [];
    let total: number = 0;
    for(let i: number = 0; i < numberOfDice; i++){
      const diceValue: number = this.getRandomDiceValue()
      values.push(diceValue);
      total += diceValue;
    }
    return {
      numberOfDice: numberOfDice,
      values: values,
      total: total
    };
  }

  onRollDice(): void {
    this.rollData = this.getRollData(this.numberOfDice);
  }
}
