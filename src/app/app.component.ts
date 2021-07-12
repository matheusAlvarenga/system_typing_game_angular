import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  target_text = lorem.sentence();
  input_text = "";

  handleInput(value:string) {
    this.input_text = value;
  }

  compare(entered:string, random:string) {
    if(!entered) {
      return 'grey';
    }

    if(random === entered) {
      return 'green';
    } else {
      return 'red';
    }
  }
}
