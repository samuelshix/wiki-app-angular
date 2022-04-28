import { Component, OnInit } from '@angular/core';
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
    private http: HttpClient
  ) { }

  ngOnInit(): void {

  }
}
