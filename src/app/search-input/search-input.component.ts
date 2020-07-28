import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() keyword: EventEmitter<any> = new EventEmitter<any>()

  getKeyword(event) {
    let value = event.target.value;
    this.keyword.emit(value);
    console.log(value);
  }
}
