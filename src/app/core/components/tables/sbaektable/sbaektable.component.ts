import { Component, OnInit } from '@angular/core';
import { TableService } from '../../../services/tables.service';
import { table } from '../../../models/table';
import  moment from 'moment';
@Component({
  selector: 'app-sbaektable',
  templateUrl: './sbaektable.component.html',
  styleUrl: './sbaektable.component.scss'
})
export class SbaektableComponent {
  usd24!:number
  sar24!:number
  localdate:any
  constructor(private tableserv:TableService){

  }
 Number(value:string){
  return Number(value)
 }
  ngOnInit(): void {
    var txt1="241880.00"
    console.log(txt1.slice(0, 3) + "," + txt1.slice(3))
    this.tableserv.getusd().subscribe(x=>{
     this.usd24=x.karat_24
     this.usd24=+this.usd24
     this.localdate= moment.utc(x._date).local().format('YYYY-MM-DD')
    })
    this.tableserv.getsar().subscribe(x=>{
      this.sar24=x.karat_24
      this.sar24=+this.sar24
    })
  }
}
