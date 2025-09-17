import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-dice-display',
  imports: [],
  templateUrl: './dice-display.html',
  styleUrl: './dice-display.css'
})
export class DiceDisplay {
 @Input() values: number[] | undefined;
}
