import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import {Routes, RouterModule} from "@angular/router";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';


const appRoutes: Routes = [
  { path: '',
    component: Page1Component,
    data: { title: 'Heroes List' }},
  {
    component: Page2Component,
    path: 'p2/:id',
    data:{ dataParam: 'param from coonfig'}
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    PageNotFoundComponent,
    Page1Component,
    Page2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

//dok
//https://angular.io/api/router/
