import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListKegiatanPage } from './list-kegiatan.page';

const routes: Routes = [
  {
    path: '',
    component: ListKegiatanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListKegiatanPageRoutingModule {}
