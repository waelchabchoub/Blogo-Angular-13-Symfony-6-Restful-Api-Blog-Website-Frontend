import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogoService } from 'src/app/blogo.service';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-admin-detail',
  templateUrl: './admin-detail.component.html',
  styleUrls: ['./admin-detail.component.css']
})
export class AdminDetailComponent implements OnInit {

  @Input() selectedUser!:User;
  constructor(private blogoService:BlogoService,private router:Router) { }

  ngOnInit(): void {
      
  }
  update(){
   this.router.navigate(['blogo/admin/user',this.selectedUser.id]);
  }


}
