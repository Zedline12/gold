import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SabektableComponent } from './sabektable/sabektable.component';

const routes: Routes = [
  {path:'sabektable',component:SabektableComponent},
  {path:'',redirectTo:'/sabektable',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SbtableRoutingModule { }
