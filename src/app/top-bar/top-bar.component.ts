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

  searchThis() {
    this.searchService.addSearchResults(this.searchWord);
    // this.searchCriteria.emit(this.searchword)
    this.searchService.searchThis();
  }

  randomPage() {
    var randomId = Math.floor((Math.random() * this.searchService.numberOfPages) + 1);
    this.router.navigateByUrl('/pages/'+randomId);
    console.log(randomId)
  }

  constructor(
    private router: Router,
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
    this.searchService.clearSearchResults();
    this.searchService.noResultsMessage = undefined;
  }

}
