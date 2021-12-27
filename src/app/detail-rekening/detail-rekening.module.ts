import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailRekeningPageRoutingModule } from './detail-rekening-routing.module';

import { DetailRekeningPage } from './detail-rekening.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailRekeningPageRoutingModule
  ],
  declarations: [DetailRekeningPage]
})
export class DetailRekeningPageModule {}
