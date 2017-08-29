import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {query} from "@angular/core/src/animation/dsl";

@Component({
  moduleId: module.id,
  selector: 'app-page2',
  templateUrl: 'page2.component.html',
  styleUrls: ['page2.component.css']
})
export class Page2Component implements OnInit {

  public params;
  public data;

  private routerState;
  private routerData;
  private routerParams;

  public goHome(){
    this.router.navigate([ '/'] ).then( function () {
      console.log('home!!!')
    })
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,){
  }

  ngOnInit() {

    //using snapshot
    console.log('snapshot')

    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.data);
    console.log(this.route.snapshot.params);

    // console.log(this.route.snapshot.paramMap.get('data'))

    //using subscribe fo rout params
    this.routerState = this.route.params.subscribe(params => {
      console.log('params')
      console.log(params);
      this.params = params;

    });

    this.routerData = this.route.data.subscribe( data => {
      console.log('data');
      console.log(data);
      this.data = data;

    });

    this.routerParams = this.route.queryParams.subscribe( queryParams => {
      console.log('queryParams');
      console.log(queryParams)
    })


  }

}


