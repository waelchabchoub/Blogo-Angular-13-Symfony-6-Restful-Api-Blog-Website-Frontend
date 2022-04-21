import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogoService } from 'src/app/blogo.service';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-user-credentials',
  templateUrl: './user-credentials.component.html',
  styleUrls: ['./user-credentials.component.css']
})
export class UserCredentialsComponent implements OnInit {

  user!:User;
  constructor(private activatedRoute:ActivatedRoute,private blogoService:BlogoService,private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params)=>{
        this.blogoService.getUserById(params['id']).subscribe(
          (user)=>{
            this.user=user;
          }
        );
      }
    );
  }
  updateUser(userForm:NgForm){
    userForm.value.roles = [userForm.value.roles];
    this.blogoService.updateUser(this.user,userForm.value).subscribe(
      (response)=>{
        this.router.navigate(['blogo/admin']);
      }
    );
  }
  deleteUser(){
    this.blogoService.deleteUser(this.user.id).subscribe(
      (response)=>{
        this.router.navigate(['blogo/admin']);
      }
    )
  }


}
