import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './components/table/table.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { CoreComponent } from './core/core.component';
import { HttpClientModule } from '@angular/common/http';
import { BlogService } from './services/blog.service';
import { BlogComponent } from './components/blog/blog.component';
import { SafehtmlPipe } from './pipes/safehtml.pipe';


@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    TableComponent,
    FooterComponent,
    CoreComponent,
    BlogComponent,
    SafehtmlPipe,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    RouterModule,HttpClientModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent
  ],providers:[
    BlogService
  ]
})
export class CoreModule { }
