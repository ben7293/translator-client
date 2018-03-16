import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css']
})
export class TranslateComponent implements OnInit {

  @ViewChild("origText") origTextRef: ElementRef;
  @Output() result = new EventEmitter<{}>();
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  
  submitTranslation(){
    this.http
    .post("http://localhost:8000/translator_service/", {Text: this.origTextRef.nativeElement.value})
    .subscribe(
      (val) => {
        this.result.emit(val);
      },
      res => {
        console.log(res);
      }
    );
  }

}
