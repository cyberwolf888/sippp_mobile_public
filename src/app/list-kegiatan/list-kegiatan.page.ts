import { environment } from './../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';
import { formatNumber } from '@angular/common';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-list-kegiatan',
  templateUrl: './list-kegiatan.page.html',
  styleUrls: ['./list-kegiatan.page.scss'],
})
export class ListKegiatanPage implements OnInit {
  public appName = 'Daftar Kegiatan';
  public list_kegiatan: any;
  public keyword: String;
  public isLoading = false;
  
  constructor(
    private storage: StorageService,
    public loadingController: LoadingController,
    private http: HttpClient,
    private router: Router
  ) {  }

  async ngOnInit() {
    this.getDataKegiatan();
  }

  async ionViewWillEnter() {
    
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

    this.isLoading = true;

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
      this.isLoading = false;
    });
  }

  formatUang(induk: string, perubahan: string) {
    let numeric = parseInt(induk);
    if(perubahan !== '0.00'){
      numeric = parseInt(perubahan);
    }
     
    return formatNumber(numeric,'en-US');
  }

  async searchData(){
    console.log(`search : ${ this.keyword }`);
    const query = this.keyword.toLowerCase();
    requestAnimationFrame(() => {
      this.list_kegiatan.forEach((item) => {
        const shouldShow = item.Ket_Kegiatan.toLowerCase().indexOf(query) > -1;
        item.isHide = shouldShow ? 0 : 1;
        // console.log(item);
      });
    });
  }

  async doRefresh(event) {
    console.log('Begin async operation');
    await this.getDataKegiatan();
    event.target.complete();
  }
}
