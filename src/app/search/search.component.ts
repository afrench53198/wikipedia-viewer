import { Component, OnInit } from '@angular/core';
import {Search} from '../Search';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['../app.component.css']
})
export class SearchComponent implements OnInit {

  search: Search = {
    query: "Dogs",
    url: "wikipedia.com"
  }
  constructor() { }

  ngOnInit() {
  }

}
