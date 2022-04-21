import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogoService } from 'src/app/blogo.service';
import { Article } from 'src/app/model/Article';

@Component({
  selector: 'app-my-article-detail',
  templateUrl: './my-article-detail.component.html',
  styleUrls: ['./my-article-detail.component.css']
})
export class MyArticleDetailComponent implements OnInit {

  @Input() selectedArticle!:Article;
  constructor(private blogoService:BlogoService,private router:Router) { }

  ngOnInit(): void {
      
  }
  viewMore(){
   this.router.navigate(['blogo/article',this.selectedArticle.id]);
  }


}
