import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SbtableRoutingModule } from './sbtable-routing.module';
import { SabektableComponent } from './sabektable/sabektable.component';
import { CoreModule } from '../../../core/core.module';


@NgModule({
  declarations: [
    SabektableComponent
  ],
  imports: [
    CommonModule,
    SbtableRoutingModule,
    CoreModule
  ]
})
export class SbtableModule { }
