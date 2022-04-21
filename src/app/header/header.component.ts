import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../authentification.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    
  constructor(private router:Router,public authentificationService:AuthentificationService) { }

  ngOnInit(): void {
  }
  logout(){
    this.authentificationService.logout();
    this.router.navigate(['blogo']);
  }
}
