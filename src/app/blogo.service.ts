import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from './model/Article';
import { User } from './model/User';

@Injectable({
  providedIn: 'root'
})
export class BlogoService {

 
  constructor(private http:HttpClient) { }
  
  getPosts(filter:any,page:any):Observable<Article[]>{
    return this.http.get<Article[]>('http://localhost:8000/api/articles',{headers:{'Accept':'application/json'},params:{'name':filter,'page':page}});
  }
  getPostById(id:any):Observable<Article>{
    return this.http.get<Article>('http://localhost:8000/api/articles/'+id);
  }
  getUserPosts(id:any,filter:any,page:any):Observable<Article[]>{
    // Use this in place of LoginInterceptor
    //const token = localStorage.getItem('token');
    //{headers:{'Accept':'application/json','Authorization':`Bearer ${token}`}
    return this.http.get<Article[]>('http://localhost:8000/api/users/'+id+'/articles',{params:{'name':filter,'page':page}});
  }
  addPost(article:Article){ 
    return this.http.post('http://localhost:8000/api/articles',article);
  }
  updatePost(article:any):Observable<any>{
    return this.http.put('http://localhost:8000/api/articles/'+article.id,article);
  }
  deletePost(id:any){
    return this.http.delete('http://localhost:8000/api/articles/'+id);
  }
  getUserById(id:any):Observable<User>{
    return this.http.get<User>('http://localhost:8000/api/users/'+id);
  }
  getUsers(filter:any,page:any):Observable<User[]>{
    return this.http.get<User[]>('http://localhost:8000/api/users',{headers:{'Accept':'application/json'},params:{'email':filter,'page':page}});
  }
  updateUser(user:any,form:any):Observable<any>{
    return this.http.put('http://localhost:8000/api/users/'+user.id,form);
  }
  deleteUser(id:any){
    return this.http.delete('http://localhost:8000/api/users/'+id);
  }

}
