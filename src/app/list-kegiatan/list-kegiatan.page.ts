import { environment } from './../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StorageService } from '../services/storage.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { formatNumber } from '@angular/common';


@Component({
  selector: 'app-list-kegiatan',
  templateUrl: './list-kegiatan.page.html',
  styleUrls: ['./list-kegiatan.page.scss'],
})
export class ListKegiatanPage implements OnInit {
  public appName = environment.appName;
  public list_kegiatan: any;
  public keyword: String;
  
  constructor(
    private storage: StorageService,
    private http: HttpClient,
    private router: Router,
    public loadingController: LoadingController
  ) {  }

  async ngOnInit() {
    await this.getDataKegiatan();
  }

  async listRekening(i) {
    // console.log(`List rekening ${ id_prog } - ${ kd_prog } - ${ kd_keg }`);
    const data = this.list_kegiatan[i];
    this.storage.set('id_prog', data['ID_Prog']);
    this.storage.set('kd_prog', data['Kd_Prog']);
    this.storage.set('kd_keg', data['Kd_Keg']);
    this.storage.set('nama_keg', data['Ket_Kegiatan']);
    this.storage.set('pagu_induk', data['total_induk']);
    this.storage.set('pagu_perubahan', data['total_perubahan']);
    this.router.navigateByUrl('/list-rekening');
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
        // console.log(this.list_kegiatan);
      }
      await loading.dismiss();
    });
  }

  formatUang(induk: string, perubahan: string) {
    let numeric = parseInt(induk);
    if(perubahan !== '0.00'){
      let numeric = parseInt(perubahan);
    }
     
    return formatNumber(numeric,'en-US');
  }

  async searchData(){
    console.log(`search : ${ this.keyword }`);
    
  }
}
