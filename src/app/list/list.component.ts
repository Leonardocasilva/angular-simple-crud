import { Component, OnInit } from '@angular/core';
import { ListService } from './list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  Users: Array<any>;

  constructor(private service: ListService) { }

  ngOnInit() {
    this.GetAll();
  }

  GetAll() {
    this.service.List().subscribe(data => {
      this.Users = data;
    },
    er => {

    });
  }

  Remove(id) {
    this.service.Remove(id).subscribe(u => {
      this.GetAll();
    },
    er => {

    });
  }

}
