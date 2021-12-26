import { Component, OnInit } from '@angular/core';
import { environment } from './../../environments/environment';
import { StorageService } from '../services/storage.service';
import { LoadingController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-rekening',
  templateUrl: './list-rekening.page.html',
  styleUrls: ['./list-rekening.page.scss'],
})
export class ListRekeningPage implements OnInit {
  public pageTitle = `List Rekening`;
  public list_rekening: any;

  constructor(
    private storage: StorageService,
    public loadingController: LoadingController,
    private http: HttpClient
  ) { }

  async ngOnInit() {
    await this.getDataRekening();
  }

  async getDataRekening() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
    });
    await loading.present();

    const endpoint  = environment.apiServer + 'kegiatan/rekening/';
    const kd_urusan = await this.storage.get('kd_urusan');
    const kd_bidang = await this.storage.get('kd_bidang');
    const kd_unit = await this.storage.get('kd_unit');
    const kd_sub = await this.storage.get('kd_sub');
    const id_prog = await this.storage.get('id_prog');
    const kd_prog = await this.storage.get('kd_prog');
    const kd_keg = await this.storage.get('kd_keg');
    // console.log(`List rekening ${ id_prog } - ${ kd_prog } - ${ kd_keg }`);

    this.http.post(endpoint, {
      kd_urusan: kd_urusan,
      kd_bidang: kd_bidang,
      kd_unit: kd_unit,
      kd_sub: kd_sub,
      id_prog: id_prog,
      kd_prog: kd_prog,
      kd_keg: kd_keg
    }).subscribe(async (response) => {
      // console.log(response);
      if(response['status'] === 1){
        this.list_rekening = response['data'];
        console.log(this.list_rekening);
      }
      await loading.dismiss();
    });
  }

  formatUang(uang: String) {
    let str = uang.slice(0, -3);
    str = parseInt(str).toLocaleString('en-US', {style: 'decimal'}).replace(/,/g, '.');
    return str;
  }
}
