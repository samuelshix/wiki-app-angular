import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  searchWord: string = "";
  @Output() searchCriteria = new EventEmitter<String>();

  searchThis() {
    this.searchService.addSearchResults(this.searchWord);
    // this.searchCriteria.emit(this.searchword)
    this.searchService.searchThis();
  }

  randomPage() {

  }
  constructor(
    private router: Router,
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
    this.searchService.clearSearchResults();
  }

}
