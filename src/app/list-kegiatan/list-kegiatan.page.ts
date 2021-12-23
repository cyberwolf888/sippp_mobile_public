import { environment } from './../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StorageService } from '../services/storage.service';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-list-kegiatan',
  templateUrl: './list-kegiatan.page.html',
  styleUrls: ['./list-kegiatan.page.scss'],
})
export class ListKegiatanPage implements OnInit {
  public appName = environment.appName;
  public list_kegiatan: any;
  
  constructor(
    private storage: StorageService,
    private http: HttpClient,
    public loadingController: LoadingController
  ) { }

  async ngOnInit() {
    await this.getDataKegiatan();
  }

  async ionViewWillEnter() {
    
  }

  async getDataKegiatan() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
    });
    await loading.present();

    const endpoint  = environment.apiServer + 'kegiatan/list/';
    const kd_urusan = await this.storage.get('kd_urusan');
    const kd_bidang = await this.storage.get('kd_bidang');
    const kd_unit = await this.storage.get('kd_unit');
    const kd_sub = await this.storage.get('kd_sub');

    this.http.post(endpoint, {
      kd_urusan: kd_urusan,
      kd_bidang: kd_bidang,
      kd_unit: kd_unit,
      kd_sub: kd_sub,
    }).subscribe(async (response) => {
      // console.log(response);
      if(response['status'] === 1){
        this.list_kegiatan = response['data'];
        console.log(this.list_kegiatan);
      }
      await loading.dismiss();
    });
  }
}
