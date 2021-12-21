import { environment } from './../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {NgForm} from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public appName = environment.appName;

  constructor(private authService: AuthService, public toastController: ToastController) { }

  async ngOnInit() {}

  async login(f:NgForm){
    if(!('username' in f.value) || !('password' in f.value)){
      const toast = await this.toastController.create({
        message: 'Username dan Password tidak boleh kosong',
        duration: 2000,
      });
      toast.present();
      return ;
    }else{
      const auth = await this.authService.auth(f.value['username'], f.value['password']);
      console.log(auth);
    }
    
  }

}
