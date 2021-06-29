import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input()
  username: string;
  @Input()
  unamesize: number = 25;
  @Input()
  unametxt: string = 'Enter registered user name'
  @Input()
  unamedisabled : boolean = true;

  @Input()
  password: string = 'test123';
  @Input()
  pwdsize: number = 15;

  constructor() { }

  ngOnInit(): void {
  }



}
