import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { CoreComponent } from './core/core.component';
import { HttpClientModule } from '@angular/common/http';
import { BlogService } from './services/blog.service';
import { BlogComponent } from './components/blog/blog.component';
import { SafehtmlPipe } from './pipes/safehtml.pipe';
import { BlogsComponent } from './components/blogs/blogs.component';
import { TableService } from './services/tables.service';
import { MaintableComponent } from './components/tables/maintable/maintable.component';
import { HistoryTableComponent } from './components/tables/history-table/history-table.component';
import { CommissionTableComponent } from './components/tables/commission-table/commission-table.component';
import { KaratComponent } from './components/karat/karat.component';
import { SbaektableComponent } from './components/tables/sbaektable/sbaektable.component';
import { PricePipe } from './pipes/price.pipe';
import { SpotgoldComponent } from './components/spotgold/spotgold.component';
import { FooterService } from './services/footer.service';
import { SingleviewComponent } from './components/singleview/singleview.component';

@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    CoreComponent,
    BlogComponent,
    SafehtmlPipe,
    BlogsComponent,
    MaintableComponent,
    HistoryTableComponent,
    CommissionTableComponent,
    SbaektableComponent,
    KaratComponent,
    PricePipe,
    SpotgoldComponent,
    SingleviewComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    RouterModule,HttpClientModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    MaintableComponent,
    SbaektableComponent
  ],providers:[
    BlogService,TableService,FooterService
  ]
})
export class CoreModule { }
