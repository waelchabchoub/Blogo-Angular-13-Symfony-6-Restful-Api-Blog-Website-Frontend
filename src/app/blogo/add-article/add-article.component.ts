import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogoService } from 'src/app/blogo.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  constructor(private blogoService:BlogoService,private router:Router) { }

  ngOnInit(): void {
  }
addPost(formulaire:NgForm){

  this.blogoService.addPost(formulaire.value).subscribe(
    (response)=>{
      this.router.navigate(['blogo/my_articles']);
    }
  );
  
}

}
