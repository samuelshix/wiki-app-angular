import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import PagesJson from '../../pages.json';

@Injectable({
  providedIn: 'root'
})

export class SearchService {
  searchResults: {
    id: number;
    name: string;
    path: string;
  }[] = [];
  constructor(private router: Router) { }

  addSearchResults(searchTerm: string) {
    if (searchTerm.length > 0) {
      this.searchResults = PagesJson.filter(function (ele, i, array) {
        ele.name = ele.name.toLowerCase();
        return ele.name.includes(searchTerm.toLowerCase());
      })
    }
  }

  clearSearchResults() {
    this.searchResults = [];
  }
  searchThis() {
    this.router.navigateByUrl("/search");
  }
}
