import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogoService } from 'src/app/blogo.service';
import { Article } from 'src/app/model/Article';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.css']
})
export class DetailArticleComponent implements OnInit {
  @Input() selectedArticle!:Article;
  constructor(private blogoService:BlogoService,private router:Router) { }

  ngOnInit(): void {
      
  }
  /*viewMore(){
   this.router.navigate(['blogo/article',this.selectedArticle.id]);
  }*/

}
