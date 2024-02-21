import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { CalculatorsModule } from '../calculators/calculators.module';
import { SbtableModule } from '../tables/sbtable/sbtable.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    CalculatorsModule,
    SbtableModule
  ]
})
export class FeaturesModule {}
