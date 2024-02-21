import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculatorsRoutingModule } from './calculators-routing.module';
import { PriceCalcComponent } from './price-calc/price-calc.component';
import { CoreModule } from '../../core/core.module';
import { ZakaCalcComponent } from './zaka-calc/zaka-calc.component';
import { TableService } from '../../core/services/tables.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
   PriceCalcComponent,
   ZakaCalcComponent
  ],
  imports: [
    CommonModule,
    CalculatorsRoutingModule,
    CoreModule,FormsModule
  ],
  providers:[
    TableService
  ]
})
export class CalculatorsModule { }
