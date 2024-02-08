import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminindexComponent } from './pages/adminindex/adminindex.component';

const routes: Routes = [
  {path:"adminindex",component:AdminindexComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
