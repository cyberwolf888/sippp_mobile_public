import { environment } from './../environments/environment';
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/list-kegiatan', icon: 'home' },
    { title: 'Profile', url: '/profile', icon: 'person' },
    // { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    // { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    // { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    // { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    // { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  public appName = environment.appName;
  public appLabel = environment.appLabel;
  constructor(private storage: Storage,private router: Router,private authService: AuthService) {}

  async ngOnInit() {
    await this.upadteNama();
  }

  async ionViewWillEnter() {
    
  }

  async upadteNama() {
    const isLogedIn = await this.authService.isLogedIn();
    if(isLogedIn){
      const nama = await this.storage.get('nama');
      if(nama !== ''){
        this.appLabel = nama;
      }
    }
  }

  async logout() {
    console.log('logout');
    await this.storage.clear();
    this.router.navigateByUrl('/login');
  }
}
