import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import PagesJson from '../../pages.json';
import { PagesComponent } from './pages/pages.component';

@Injectable({
  providedIn: 'root'
})

export class SearchService {
  searchResults: {
    id: number;
    name: string;
    path: string;
  }[] = [];
  
  noResultsMessage: string | undefined;
  numberOfPages= PagesJson.length;
  constructor(private router: Router) { }

  addSearchResults(searchTerm: string) {
    if (searchTerm.length > 0) {
      this.searchResults = PagesJson.filter(function (ele, i, array) {
        ele.name = ele.name.toLowerCase();
        return ele.name.includes(searchTerm.toLowerCase());
      })
      if (this.searchResults.length === 0) {
        this.noResultsMessage = "No search results returned!"
      }
    }
  }

  clearSearchResults() {
    this.searchResults = [];
  }
  searchThis() {
    this.router.navigateByUrl("/search");
  }
}
