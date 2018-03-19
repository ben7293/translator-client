import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  selected = "translate";
  result = [];
  constructor(private http: HttpClient){}

  getHistory(){
    this.http
    .get("http://52.90.64.206:8000/translator_service/get_all")
    .subscribe(
      (val) => {
        this.result = Object.values(val).reverse();
      },
    );      
  }

  receiveTranslationResult(translationResult: {}){
    if(translationResult){
      this.result.push(translationResult);
    }
    this.selected = "results";
  }

  ngOnInit(){
    this.getHistory();
  }

}