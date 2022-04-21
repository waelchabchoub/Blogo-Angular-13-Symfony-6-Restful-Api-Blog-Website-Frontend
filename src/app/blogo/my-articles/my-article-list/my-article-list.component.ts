import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from 'src/app/model/Article';

@Component({
  selector: 'app-my-article-list',
  templateUrl: './my-article-list.component.html',
  styleUrls: ['./my-article-list.component.css']
})
export class MyArticleListComponent implements OnInit {

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
