import { Component } from '@angular/core';
import { TableService } from '../../../services/tables.service';
import { table } from '../../../models/table';
import  moment from 'moment';
@Component({
  selector: 'app-commission-table',
  templateUrl: './commission-table.component.html',
  styleUrl: './commission-table.component.scss'
})
export class CommissionTableComponent {
  sar!:table
  lastupdate!:number;
  constants:{id:number,karat:string,new:number,used:number}[]=[]
  constructor(private tableserv:TableService){

  }
  const(karat:string){
   return this.constants.find(x=>x.karat==karat)
  }
  Number(t:any){
   return Number(t)
  }
  ngOnInit(): void {
    this.tableserv.getconstants().subscribe(x=>{
      this.constants=x
      this.constants.map((x:any)=>{
        x.new=+x.new;
        x.used=+x.used;
        
      })
     
    })
    this.tableserv.getsar().subscribe(x=>{
      this.sar=x
      this.sar.karat_24=+this.sar.karat_24
      this.sar.karat_22=+this.sar.karat_22
      this.sar.karat_21=+this.sar.karat_21
      this.sar.karat_18=+this.sar.karat_18
      this.sar.karat_14=+this.sar.karat_14
      this.lastupdate=Number(moment(this.sar._date).fromNow().replace(/\D/g,''));
    })
  }
}
