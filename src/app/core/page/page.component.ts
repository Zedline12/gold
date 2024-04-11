import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { FooterService } from '../services/footer.service';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss'
})
export class PageComponent implements OnInit {
  html!:string
  notfound!:boolean
  constructor(private route:ActivatedRoute,public footerserv:FooterService){

  }
  ngOnInit(): void {
     const page= this.route.snapshot.paramMap.get("page")
     this.footerserv.getfooterbytitle(page!).subscribe(x=>{
      if(!x.length){
           this.html=""
           this.notfound=true
      }
       else{
        this.html=x[0].html
       }
     },err=>{

     })
  }
}
