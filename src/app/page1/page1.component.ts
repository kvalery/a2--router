import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-page1',
  templateUrl: 'page1.component.html',
  styleUrls: ['page1.component.css']
})
export class Page1Component implements OnInit {

  private routerState;
  private routerData;

  public passData = {
    data:'newData'
  };

  public chengData(){

  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,

  ) {

    console.log('routeData');
    console.log(this);

  }

  ngOnInit() {

    this.routerData = this.route.data.subscribe( data => {

      console.log('data');
      console.log(data);

    });

    // this.route.data = { dataParam : 'dataParam'}

  }

}
