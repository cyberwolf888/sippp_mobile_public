import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RencanaAksiPage } from './rencana-aksi.page';

const routes: Routes = [
  {
    path: '',
    component: RencanaAksiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RencanaAksiPageRoutingModule {}
