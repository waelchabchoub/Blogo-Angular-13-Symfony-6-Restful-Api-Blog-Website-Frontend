import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from 'src/app/model/Article';

@Component({
  selector: 'app-liste-article',
  templateUrl: './liste-article.component.html',
  styleUrls: ['./liste-article.component.css']
})
export class ListeArticleComponent implements OnInit {
  @Input() articles!:Article[];
  @Output() selectedArticleToDad = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  processReq(message:any){
    this.selectedArticleToDad.emit(
      message
    );
  }
  

}
