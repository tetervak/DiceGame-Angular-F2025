import { Component, signal } from '@angular/core';
import {MyHeader} from './my-header/my-header';


@Component({
  selector: 'app-root',
  imports: [
    MyHeader
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
