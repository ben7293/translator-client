import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  selected = "translate";
  result = {};

  translate(){
    this.selected = "translate";
  }

  results(){
    this.selected = "results";
  }

  receiveTranslationResult(translationResult: {}){
    this.result = translationResult;
    this.selected = "results";
  }
}