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
    if (this.origTextRef.nativeElement.value){
      this.http
      .post("http://52.90.64.206:8000/translator_service/", {Text: this.origTextRef.nativeElement.value})
      .subscribe(
        (val) => {
          this.result.emit(val);
        },
        res => {
          this.result.emit({original_text: this.origTextRef.nativeElement.value, translation:"Server error. Try again later."});
        }
      );
    }
    else{
      this.result.emit();
    }

  }

}
