import { Component, OnInit } from '@angular/core';
import { BlogoService } from 'src/app/blogo.service';
import { Article } from 'src/app/model/Article';
import jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-my-articles',
  templateUrl: './my-articles.component.html',
  styleUrls: ['./my-articles.component.css']
})
export class MyArticlesComponent implements OnInit {
  token = localStorage.getItem('token');
  userId!:number;
  currentPage = 1;
  articles!:Article[];
  selectedArticle!:Article;
  constructor(private blogoService:BlogoService) { }

  ngOnInit(): void {
    if(this.token){
    const token = this.getDecodedAccessToken(this.token);
    this.userId = token.user_id;
    this.blogoService.getUserPosts(this.userId,'',this.currentPage).subscribe(
      (articles)=>{
        this.articles=articles;
      }
    )
  }}
  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
  }
  processReq(message:any){
    this.selectedArticle=message;
  }
  filterArticle(filter:any){
    this.blogoService.getUserPosts(this.userId,filter,1).subscribe(
      (articles)=>{
        this.articles=articles;
      }
    )
  }
  next(){
    this.currentPage += 1;
    this.blogoService.getUserPosts(this.userId,'',this.currentPage).subscribe(
      (articles)=>{
        this.articles=articles;
      }
    );
  }

  previous(){
    this.currentPage -= 1;
    this.blogoService.getUserPosts(this.userId,'',this.currentPage).subscribe(
      (articles)=>{
        this.articles=articles;
      }
    );
  }

}
