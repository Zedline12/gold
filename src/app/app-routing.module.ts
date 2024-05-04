import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './core/page/page.component';
import { HomeComponent } from './core/home/home.component';

const routes: Routes = [
  {
    path: 'core',
    loadChildren: () => import('./core/core.module').then(m => m.CoreModule)
  },
  {
    path:"",component:HomeComponent
  },
  {path:"page/:page",component:PageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
