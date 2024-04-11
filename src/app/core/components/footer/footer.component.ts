import { Component, OnInit } from '@angular/core';
import { FooterService } from '../../services/footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
  footer!:{id:number,title:string,link:string,html:string}[]
  isempty:boolean=false
   constructor(public footerserv:FooterService){

   }
   ngOnInit(): void {
     this.footerserv.getfooter().subscribe((x:any)=>{
      if(x.length==0){
        this.isempty=true
      }
      this.footer=x
     })
   }
}
