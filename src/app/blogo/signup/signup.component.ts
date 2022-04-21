import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/authentification.service';
import { BlogoService } from 'src/app/blogo.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  equal = false;
  errorMessage='';
  constructor(private authentificationService:AuthentificationService,private router:Router) { }

  ngOnInit(): void {
  }
  checkPassword(pwd:any,repwd:any){
    this.equal = pwd.value==repwd.value;
  }
  signUp(formulaire:any){
    
    this.authentificationService.signUp(formulaire.value).subscribe(
      (response)=>{this.router.navigate(['blogo/login']);},
      (error)=>{this.errorMessage="Email Already Exist!";},
    );
  }
}
