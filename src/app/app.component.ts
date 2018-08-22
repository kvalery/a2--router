import { Component } from '@angular/core';
import {equalValueValidator} from './page2/equal-value.validator';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'app works!';

  constructor(
    public fb: FormBuilder
  ) { };

  public form = this.fb.group({
      username: '',
      password: '',
      confirmPassword: '',
    }, {validator: equalValueValidator('password', 'confirmPassword')}
  );

  public register() {
    console.log(this.form.value)
  }
}
