import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'calculators',
    loadChildren: () => import('../calculators/calculators.module').then(m => m.CalculatorsModule)
  },
  {
    path:'sbaekprices',
    loadChildren: () => import('../tables/sbtable/sbtable.module').then(m => m.SbtableModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
