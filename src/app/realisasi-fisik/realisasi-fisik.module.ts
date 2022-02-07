import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RealisasiFisikPageRoutingModule } from './realisasi-fisik-routing.module';

import { RealisasiFisikPage } from './realisasi-fisik.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RealisasiFisikPageRoutingModule
  ],
  declarations: [RealisasiFisikPage]
})
export class RealisasiFisikPageModule {}
