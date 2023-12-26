import { Component } from '@angular/core';

@Component({
  selector: 'app-first-app',
  templateUrl: './first-app.component.html',
  styleUrls: ['./first-app.component.css'],
})

export class FirstAppComponent {
  name: String;

  constructor () {
    this.name = 'Papa lindo';
  }
}
