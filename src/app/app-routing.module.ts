import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'movielist', pathMatch: 'full' },
  { path: 'moviedetail', loadChildren: () => import('./pages/moviedetail/moviedetail.module').then( m => m.MovieDetailPageModule) },
  { path: 'movielist', loadChildren: () => import('./pages/movielist/movielist.module').then( m => m.MovielistPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
