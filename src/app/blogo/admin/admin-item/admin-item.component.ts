import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/model/User';


@Component({
  selector: 'app-admin-item',
  templateUrl: './admin-item.component.html',
  styleUrls: ['./admin-item.component.css']
})
export class AdminItemComponent implements OnInit {

  @Input() user!:User;
  @Output() selectedUser = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }
  selectUser(){
    this.selectedUser.emit(
      this.user
    );
  }

}
