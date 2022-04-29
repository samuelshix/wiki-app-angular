import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import PagesJson from '../../../pages.json';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  pages = PagesJson;
  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

  }
}
