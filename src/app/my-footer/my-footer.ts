import {Component, Input} from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-my-footer',
  imports: [
    DatePipe
  ],
  templateUrl: './my-footer.html',
  styleUrl: './my-footer.css'
})
export class MyFooter {
 today: Date = new Date();
 @Input() name: string = "Sheridan College";
}
