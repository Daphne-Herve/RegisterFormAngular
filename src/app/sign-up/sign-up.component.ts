import { Component, OnInit } from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  model: User = new User();

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.model);
  }
}
