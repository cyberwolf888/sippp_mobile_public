import { Component, OnInit } from '@angular/core';
import { environment } from './../../environments/environment';
import { StorageService } from '../services/storage.service';
import { LoadingController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { formatNumber } from '@angular/common';
import { PopoverController } from '@ionic/angular';
import { DetailRekeningMenuComponent } from '../popovers/detail-rekening-menu/detail-rekening-menu.component';

@Component({
  selector: 'app-detail-rekening',
  templateUrl: './detail-rekening.page.html',
  styleUrls: ['./detail-rekening.page.scss'],
})
export class DetailRekeningPage implements OnInit {
  public pageTitle = `Detail Rekening`;
  public detail_rekening: any;
  public isLoading = true;


  constructor(
    private storage: StorageService,
    public loadingController: LoadingController,
    private http: HttpClient,
    private router: Router,
    private popover: PopoverController
  ) { }

  async ngOnInit() {
    
    await this.getDataDetailRekening();

  }

  async getDataDetailRekening() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
    });
    // await loading.present();

    const endpoint  = environment.apiServer + 'kegiatan/rekening/detail/';
    const kd_urusan = await this.storage.get('kd_urusan');
    const kd_bidang = await this.storage.get('kd_bidang');
    const kd_unit = await this.storage.get('kd_unit');
    const kd_sub = await this.storage.get('kd_sub');
    const id_prog = await this.storage.get('id_prog');
    const kd_prog = await this.storage.get('kd_prog');
    const kd_keg = await this.storage.get('kd_keg');
    const kd_rek_1 = await this.storage.get('kd_rek_1');
    const kd_rek_2 = await this.storage.get('kd_rek_2');
    const kd_rek_3 = await this.storage.get('kd_rek_3');
    const kd_rek_4 = await this.storage.get('kd_rek_4');
    const kd_rek_5 = await this.storage.get('kd_rek_5');
    // console.log(`List rekening ${ id_prog } - ${ kd_prog } - ${ kd_keg }`);

    this.http.post(endpoint, {
      kd_urusan: kd_urusan,
      kd_bidang: kd_bidang,
      kd_unit: kd_unit,
      kd_sub: kd_sub,
      id_prog: id_prog,
      kd_prog: kd_prog,
      kd_keg: kd_keg,
      kd_rek_1: kd_rek_1,
      kd_rek_2: kd_rek_2,
      kd_rek_3: kd_rek_3,
      kd_rek_4: kd_rek_4,
      kd_rek_5: kd_rek_5
    }).subscribe(async (response) => {
      // console.log(response);
      if(response['status'] === 1){
        this.detail_rekening = response['data'];
        // console.log(this.detail_rekening);
        this.isLoading = false;
      }
      // await loading.dismiss();
    });
  }

  public printRealisasiFisik(data: string){
    let numeric = parseFloat(data).toFixed(2);
    return numeric + '%';
  }

  public printKeuangan(data: string){
    if(data === '' || data === null){
      return 0;
    }else{
      let numeric = parseInt(data); 
      return formatNumber(numeric,'en-US');
    }
    
  }

  async showPopover(ev: Event){
    const pop = await this.popover.create({
      component: DetailRekeningMenuComponent,
      event: ev,
      translucent: true,
    });
    return await pop.present();
  }
  
}
