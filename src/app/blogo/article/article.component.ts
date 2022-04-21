import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogoService } from 'src/app/blogo.service';
import { Article } from 'src/app/model/Article';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  

  article!: Article;
  constructor(private activatedRoute:ActivatedRoute,private blogoService:BlogoService,private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params)=>{
        this.blogoService.getPostById(params['id']).subscribe(
          (article)=>{
            this.article=article;
          }
        );
      }
    );
  }
  updatePost(){
    this.blogoService.updatePost(this.article).subscribe(
      (response)=>{
        this.router.navigate(['blogo/my_articles']);
      }
    );
  }
  deletePost(){
    this.blogoService.deletePost(this.article.id).subscribe(
      (response)=>{
        this.router.navigate(['blogo/my_articles']);
      }
    )
  }


}
