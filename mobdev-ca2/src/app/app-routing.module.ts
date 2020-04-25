import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
//loadChildren technic-old route errased and loadChildren took it place
const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }