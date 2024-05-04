import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
export enum tables{
  pastdaysprice,
  pricetoday,
  golderat24 
}
@Component({
  selector: 'app-singleview',
  templateUrl: './singleview.component.html',
  styleUrl: './singleview.component.scss'
})
export class SingleviewComponent implements OnInit {
  
  table!:tables
    constructor(private route:ActivatedRoute){

    }
    ngOnInit(): void {
      window.scroll(0,0);
      const table=this.route.snapshot.queryParamMap.get("t")
      switch(table){
        case "pastdaysprice" :
          this.table=tables.pastdaysprice
           break;
           case "pricetoday" :
            this.table=tables.pricetoday
            break;
            case "golderat24" :
              this.table=tables.golderat24
              break;
              default:
      }
      
    }
}
