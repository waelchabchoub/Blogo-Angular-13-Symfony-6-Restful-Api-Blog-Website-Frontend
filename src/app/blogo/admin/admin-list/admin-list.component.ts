import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {

  @Input() users!:User[];
  @Output() selectedUserToDad = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  processReq(message:any){
    this.selectedUserToDad.emit(
      message
    );
  }

}
