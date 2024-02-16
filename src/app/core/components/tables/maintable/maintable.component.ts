import { Component, OnInit } from '@angular/core';
import { TableService } from '../../../services/tables.service';
import { table } from '../../../models/table';
import  moment from 'moment';
@Component({
  selector: 'app-maintable',
  templateUrl: './maintable.component.html',
  styleUrl: './maintable.component.scss'
})
export class MaintableComponent implements OnInit {
  usd!:table
  localdate!:any
  sar!:table
  sarounce!:string
  usdounce!:string
  lastupdate!:number
  ishour!:boolean
  constants:{id:number,karat:string,new:number,used:number}[]=[]
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
    this.tableserv.getusd().subscribe(x=>{
      this.usd=x
     this.localdate= moment.utc(this.usd._date).local().format('YYYY-MM-DD')
     const hours=moment().hours()-moment(this.usd._date).local().hours()
     if(hours!=0){
      this.ishour=true
      this.lastupdate=hours
     }
     else{
      const minutes=moment().minutes()-moment(this.usd._date).local().minutes()
      this.lastupdate=minutes;
     }
      this.usdounce=x.ounce.toString().slice(0,1)+","+x.ounce.toString().slice(1)
    })
    this.tableserv.getsar().subscribe(x=>{
      this.sar=x
      this.sarounce=x.ounce.toString().slice(0,1)+","+x.ounce.toString().slice(1)
      this.sar.karat_24=+this.sar.karat_24
      this.sar.karat_22=+this.sar.karat_22
      this.sar.karat_21=+this.sar.karat_21
      this.sar.karat_18=+this.sar.karat_18
      this.sar.karat_14=+this.sar.karat_14
    })
  }
}
