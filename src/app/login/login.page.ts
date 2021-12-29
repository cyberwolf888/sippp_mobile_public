import { environment } from './../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NgForm } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public appName = environment.appName;

  constructor(
    private authService: AuthService,
    public toastController: ToastController,
    private router: Router
  ) { }

  async ngOnInit() {
    const isLogedIn = await this.authService.isLogedIn();
    if(isLogedIn){
      this.router.navigateByUrl('/list-kegiatan');
    }
  }

  async login(f: NgForm){
    console.log(f.value.username);
    if(f.value.username === '' || f.value.password === ''){
      const toast = await this.toastController.create({
        message: 'Username dan Password tidak boleh kosong',
        duration: 2000,
      });
      toast.present();
      return ;
    }else{
      await this.authService.auth(f.value.username, f.value.password);
    }
  }

}
