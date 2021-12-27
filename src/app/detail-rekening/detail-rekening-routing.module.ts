import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailRekeningPage } from './detail-rekening.page';

const routes: Routes = [
  {
    path: '',
    component: DetailRekeningPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailRekeningPageRoutingModule {}
