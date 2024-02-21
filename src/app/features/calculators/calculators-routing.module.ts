import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PriceCalcComponent } from './price-calc/price-calc.component';
import { ZakaCalcComponent } from './zaka-calc/zaka-calc.component';

const routes: Routes = [
  {path:"pricecalc",component:PriceCalcComponent},
  {path:"zakacalc",component:ZakaCalcComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalculatorsRoutingModule { }
