import { Component, OnInit } from '@angular/core';
import { BlogoService } from 'src/app/blogo.service';
import { Article } from 'src/app/model/Article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  currentPage = 1;
  articles!:Article[];
  selectedArticle!:Article;
  constructor(private blogoService:BlogoService) { }

  ngOnInit(): void {
    this.blogoService.getPosts('',this.currentPage).subscribe(
      (articles)=>{
        this.articles=articles;
      }
    )
  }
  processReq(message:any){
    this.selectedArticle=message;
  }
  filterArticle(filter:any){
    this.blogoService.getPosts(filter,1).subscribe(
      (articles)=>{
        this.articles=articles;
      }
    )
  }
  next(){
    this.currentPage += 1;
    this.blogoService.getPosts('',this.currentPage).subscribe(
      (articles)=>{
        this.articles=articles;
      }
    );
  }

  previous(){
    this.currentPage -= 1;
    this.blogoService.getPosts('',this.currentPage).subscribe(
      (articles)=>{
        this.articles=articles;
      }
    );
  }
  
  
}
