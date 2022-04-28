import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageDetailsComponent } from './page-details/page-details.component';
import { PagesComponent } from './pages/pages.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', component: PagesComponent },
  { path: 'pages/:pageId', component: PageDetailsComponent },
  { path: 'search', component: SearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
