import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  listGroup = [
    {id:1,name:"Nam"},
    {id:2,name:"Nữ"},
    {id:3,name:"Khác"}
  ];
}
