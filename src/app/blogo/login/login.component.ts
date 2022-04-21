import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/authentification.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authentificationService:AuthentificationService,private router:Router) { }
  errorMessage= '';
  ngOnInit(): void {
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
  }
  
  login(credentials:any){

    this.authentificationService.login(credentials).subscribe(
      (response)=>{
        localStorage.setItem('token',response.token);
        const tokenInfo = this.getDecodedAccessToken(response.token); // decode token
        const expireDate = tokenInfo.expire_in; // get token expiration dateTime
        this.authentificationService.autoLogout(expireDate);
        this.router.navigate(['blogo']);
      },
      (error)=>{
          this.errorMessage= "Invalid Credentials";
      }
    )
  }

}
