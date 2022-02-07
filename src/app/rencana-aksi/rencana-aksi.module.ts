import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RencanaAksiPageRoutingModule } from './rencana-aksi-routing.module';

import { RencanaAksiPage } from './rencana-aksi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RencanaAksiPageRoutingModule
  ],
  declarations: [RencanaAksiPage]
})
export class RencanaAksiPageModule {}
