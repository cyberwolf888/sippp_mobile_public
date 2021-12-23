import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private storage: StorageService,
    private http: HttpClient,
    public toastController: ToastController,
    private router: Router
  ) { }

  public async auth(username: string, password: string) {
    await this.storage.init();
    const endpoint  = environment.apiServer + 'auth';
    await this.http.post(endpoint, {
      username: username,
      password: password,
    }).subscribe(async (response) => {
      if(response['status'] === 1){
        this.storage.set('foto', response['data']['foto']);
        this.storage.set('id', response['data']['id']);
        this.storage.set('kd_bidang', response['data']['kd_bidang']);
        this.storage.set('kd_sub', response['data']['kd_sub']);
        this.storage.set('kd_unit', response['data']['kd_unit']);
        this.storage.set('kd_urusan', response['data']['kd_urusan']);
        this.storage.set('nama', response['data']['nama']);
        this.storage.set('role', response['data']['role']);
        this.storage.set('username', response['data']['username']);
        this.router.navigateByUrl('/list-kegiatan');
      }else{
        const toast = await this.toastController.create({
          message: 'Password atau username anda salah',
          duration: 2000,
        });
        toast.present();
      }
    });
  }

  public async isLogedIn() {
    await this.storage.init();
    let username: String = await this.storage.get('username');
    if(username !== null && username.length > 0){
      return true;
    }
    return false;
  }
}
