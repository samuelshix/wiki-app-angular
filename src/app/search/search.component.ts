import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searches = this.searchService.searchResults;
  noResultsMessage = this.searchService.noResultsMessage;
  
  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

}
