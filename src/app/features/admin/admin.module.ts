import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminindexComponent } from './pages/adminindex/adminindex.component';
import { EditorModule ,TINYMCE_SCRIPT_SRC} from '@tinymce/tinymce-angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminindexComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    EditorModule,
    FormsModule
  ],
  providers:[
    {provide:TINYMCE_SCRIPT_SRC,useValue:"tinymce/tinymce.min.js"}
  ]
})
export class AdminModule { }
