import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListRekeningPage } from './list-rekening.page';

const routes: Routes = [
  {
    path: '',
    component: ListRekeningPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListRekeningPageRoutingModule {}
