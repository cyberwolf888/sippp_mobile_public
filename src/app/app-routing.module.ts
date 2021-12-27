import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'list-kegiatan',
    loadChildren: () => import('./list-kegiatan/list-kegiatan.module').then( m => m.ListKegiatanPageModule)
  },
  {
    path: 'list-rekening',
    loadChildren: () => import('./list-rekening/list-rekening.module').then( m => m.ListRekeningPageModule)
  },  {
    path: 'detail-rekening',
    loadChildren: () => import('./detail-rekening/detail-rekening.module').then( m => m.DetailRekeningPageModule)
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
