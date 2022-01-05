import { Component, OnInit } from '@angular/core';
import { environment } from './../../environments/environment';
import { StorageService } from '../services/storage.service';
import { LoadingController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { formatNumber } from '@angular/common';

@Component({
  selector: 'app-list-rekening',
  templateUrl: './list-rekening.page.html',
  styleUrls: ['./list-rekening.page.scss'],
})
export class ListRekeningPage implements OnInit {
  public pageTitle = `List Rekening`;
  public list_rekening: any;
  public nama_keg: any;
  public pagu_induk: any;
  public pagu_perubahan: any;
  public isLoading = true;
  
  constructor(
    private storage: StorageService,
    public loadingController: LoadingController,
    private http: HttpClient,
    private router: Router,
  ) { }

  async ngOnInit() {
    await this.getDataRekening();
  }

  async getDataRekening() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
    });
    // await loading.present();

    const endpoint  = environment.apiServer + 'kegiatan/rekening/';
    const kd_urusan = await this.storage.get('kd_urusan');
    const kd_bidang = await this.storage.get('kd_bidang');
    const kd_unit = await this.storage.get('kd_unit');
    const kd_sub = await this.storage.get('kd_sub');
    const id_prog = await this.storage.get('id_prog');
    const kd_prog = await this.storage.get('kd_prog');
    const kd_keg = await this.storage.get('kd_keg');

    this.nama_keg = await this.storage.get('nama_keg');
    this.pagu_induk = await this.storage.get('pagu_induk');
    this.pagu_perubahan = await this.storage.get('pagu_perubahan');
    
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
        // console.log(this.list_rekening);
        this.isLoading = false;
      }
      // await loading.dismiss();
    });
  }

  formatUang(uang: string) {
    let numeric = parseInt(uang); 
    return formatNumber(numeric,'en-US');
  }

  async detailRekening(kd_rek_1: String, kd_rek_2: String, kd_rek_3: String, kd_rek_4: String, kd_rek_5: String) {
    this.storage.set('kd_rek_1', kd_rek_1);
    this.storage.set('kd_rek_2', kd_rek_2);
    this.storage.set('kd_rek_3', kd_rek_3);
    this.storage.set('kd_rek_4', kd_rek_4);
    this.storage.set('kd_rek_5', kd_rek_5);
    this.router.navigateByUrl('/detail-rekening');
  }
}
