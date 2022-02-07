import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RealisasiFisikPage } from './realisasi-fisik.page';

const routes: Routes = [
  {
    path: '',
    component: RealisasiFisikPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RealisasiFisikPageRoutingModule {}
