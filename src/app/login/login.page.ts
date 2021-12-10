import { environment } from './../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public appName = environment.appName;
  username: string = null;
  password: string = null;

  constructor(private auth: AuthService) { }

  async ngOnInit() {}

  async login(){
    const auth = await this.auth.auth(this.username, this.password);
    console.log(auth);
  }

}
