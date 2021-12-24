import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListRekeningPageRoutingModule } from './list-rekening-routing.module';

import { ListRekeningPage } from './list-rekening.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListRekeningPageRoutingModule
  ],
  declarations: [ListRekeningPage]
})
export class ListRekeningPageModule {}
