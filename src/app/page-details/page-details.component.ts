import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Page, defaultPage } from '../pages';
import { HttpClient } from '@angular/common/http';

import PagesJson from '../../../pages.json';

@Component({
  selector: 'app-page-details',
  templateUrl: './page-details.component.html',
  styleUrls: ['./page-details.component.css']
})
export class PageDetailsComponent implements OnInit {
  page: Page = defaultPage;
  pages = PagesJson;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const pageIdFromRoute = Number(routeParams.get('pageId'));
    this.page = PagesJson.find(
      (page) => page.id === pageIdFromRoute
    )!
    console.log(this.page.path)
  }
}
