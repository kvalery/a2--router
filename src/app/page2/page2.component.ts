import { Component, OnInit } from '@angular/core';


import {equalValueValidator} from './equal-value.validator';
import {FormBuilder} from '@angular/forms';


@Component({
  moduleId: module.id,
  selector: 'app-page2',
  templateUrl: 'page2.component.html',
  styleUrls: ['page2.component.css']
})
export class Page2Component implements OnInit {

  // public registrationForm = this.fb.group({
  //     username: [''],
  //     password: [''],
  //     confirmPassword: [''],
  //   },
  //   {validator: equalValueValidator('password', 'confirmPassword')}  // key is to validate on the form group
  // );

  constructor(
    private fb: FormBuilder) {
  }

  ngOnInit() {

  }

  // public register() {
  //   console.log(this)
  // }
}


