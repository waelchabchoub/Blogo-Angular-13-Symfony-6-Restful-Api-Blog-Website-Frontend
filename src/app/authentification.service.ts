import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Token } from './model/Token';
import { User } from './model/User';
import jwt_decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http:HttpClient) { }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
  }

  signUp(user:User):Observable<any>{
    return this.http.post('http://localhost:8000/api/users',user);
  }
  login(credentials:User):Observable<Token>{
    return this.http.post<Token>('http://localhost:8000/api/login',credentials,{headers:{'Accept':'application/json'}});
  }
  logout(){
    localStorage.removeItem('token');
  }
  autoLogout(expiration:number){
    setTimeout(()=>{
      this.logout();},expiration*1000);
    }
  isLogged(){
    return !!localStorage.getItem('token');
  }
  isAdmin(){
    const token = localStorage.getItem('token');
    if(token){
    const tokenInfo = this.getDecodedAccessToken(token); // decode token
    return tokenInfo.roles.includes("ROLE_ADMIN"); // get token expiration dateTime }
  }else{
  return !!token;
  }
}
}
