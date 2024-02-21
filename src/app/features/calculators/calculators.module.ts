import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculatorsRoutingModule } from './calculators-routing.module';
import { PriceCalcComponent } from './price-calc/price-calc.component';
import { CoreModule } from '../../core/core.module';
import { ZakaCalcComponent } from './zaka-calc/zaka-calc.component';


@NgModule({
  declarations: [
   PriceCalcComponent,
   ZakaCalcComponent
  ],
  imports: [
    CommonModule,
    CalculatorsRoutingModule,
    CoreModule
  ]
})
export class CalculatorsModule { }
