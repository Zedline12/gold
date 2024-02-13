import { Component, OnInit } from '@angular/core';
import { TableService } from '../../../services/tables.service';
import { table } from '../../../models/table';

@Component({
  selector: 'history-table',
  templateUrl: './history-table.component.html',
  styleUrl: './history-table.component.scss'
})
export class HistoryTableComponent implements OnInit {
  usdhistory!:table[]
  sarhistory!:table[]
  constants!:{id:number,karat:string,new:number,used:number}[]
  constructor(private tableserv:TableService){

  }
  const(karat:string){
    return this.constants.find(x=>x.karat==karat)
   }
ngOnInit(): void {
  this.tableserv.getconstants().subscribe(x=>{
    this.constants=x
    this.constants.map((x:any)=>{
      x.new=+x.new;
      x.used=+x.used;
      
    })
   
  })
  this.tableserv.getsarhistory().subscribe(x=>{
    this.sarhistory=x
    this.sarhistory.map((x)=>{
      x.karat_14=+x.karat_14
      x.karat_18=+x.karat_18
      x.karat_21=+x.karat_21
      x.karat_22=+x.karat_22
      x.karat_24=+x.karat_24
    })
  })
}
}
