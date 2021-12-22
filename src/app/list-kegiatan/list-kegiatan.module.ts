import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListKegiatanPageRoutingModule } from './list-kegiatan-routing.module';

import { ListKegiatanPage } from './list-kegiatan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListKegiatanPageRoutingModule
  ],
  declarations: [ListKegiatanPage]
})
export class ListKegiatanPageModule {}
