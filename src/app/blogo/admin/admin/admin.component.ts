import { Component, OnInit } from '@angular/core';
import { BlogoService } from 'src/app/blogo.service';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  currentPage = 1;
  users!:User[];
  selectedUser!:User;
  constructor(private blogoService:BlogoService) { }

  ngOnInit(): void {
    this.blogoService.getUsers('',this.currentPage).subscribe(
      (users)=>{
        this.users=users;
      }
    )
  }
  processReq(message:any){
    this.selectedUser=message;
  }
  filterUsers(filter:any){
    this.blogoService.getUsers(filter,1).subscribe(
      (users)=>{
        this.users=users;
      }
    )
  }
  next(){
    this.currentPage += 1;
    this.blogoService.getUsers('',this.currentPage).subscribe(
      (users)=>{
        this.users=users;
      }
    );
  }

  previous(){
    this.currentPage -= 1;
    this.blogoService.getUsers('',this.currentPage).subscribe(
      (users)=>{
        this.users=users;
      }
    );
  }
  
  
}

