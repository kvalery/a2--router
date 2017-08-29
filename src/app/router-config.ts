
import {Page1Component} from "./page1/page1.component";
import {Page2Component} from "./page2/page2.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

export const RouterConfig = [
  { path: '',
    component: Page1Component,
    data: { title: 'Heroes List' }},
  {
    component: Page2Component,
    path: 'p2/:id',
    data:{ dataParam: 'param from coonfig'}
  },
  { path: '**', component: PageNotFoundComponent }
]
