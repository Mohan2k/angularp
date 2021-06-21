import { Component, OnInit } from '@angular/core';
import { HelpLoginService } from '../help-login.service';

@Component({
  selector: 'app-login-activity',
  templateUrl: './login-activity.component.html',
  styleUrls: ['./login-activity.component.css']
})
export class LoginActivityComponent implements OnInit {

  constructor(private helpLoginService:HelpLoginService) { }

  ngOnInit() {
  }

  onLoginSubmit()
  {
    this.helpLoginService.testFunction();
  }

}
