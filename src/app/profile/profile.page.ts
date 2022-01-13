import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { StorageService } from '../services/storage.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public pageTitle = 'Profile';
  public profile = {
    nama: null,
    username: null,
    password: null,
    password_confirm: null
  };

  constructor(
    private storage: StorageService,
    public loadingController: LoadingController,
  ) { }

  async ngOnInit() {
    await this.getData();
  }

  async save() {

  }

  async getData() {
    this.profile.nama = await this.storage.get('nama');
    this.profile.username = await this.storage.get('username');
  }
}
