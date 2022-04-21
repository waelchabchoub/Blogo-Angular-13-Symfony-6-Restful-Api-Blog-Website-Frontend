import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from 'src/app/model/Article';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css']
})
export class ArticleItemComponent implements OnInit {
  @Input() article!:Article;
  @Output() selectedArticle = new EventEmitter();
  user!:User;
  constructor() { }

  ngOnInit(): void {
  }
  selectPost(){
    this.selectedArticle.emit(
      this.article
    );
  }

}
