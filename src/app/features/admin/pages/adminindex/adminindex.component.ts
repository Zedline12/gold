import { Component ,ElementRef,ViewChild
} from '@angular/core';

@Component({
  selector: 'app-adminindex',
  templateUrl: './adminindex.component.html',
  styleUrl: './adminindex.component.scss'
})
export class AdminindexComponent {
  editortext!:string
  editorConfig={
    base_url:"/tinymce",
    suffix:".min",
    plugins:"lists link image table wordcount"
  }
  click(){
   console.log(this.editortext)
  }
}
