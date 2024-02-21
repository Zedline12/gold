import { Component,HostListener, OnInit } from '@angular/core';
import { TableService } from '../../../core/services/tables.service';
import { table } from '../../../core/models/table';

@Component({
  selector: 'app-price-calc',
  templateUrl: './price-calc.component.html',
  styleUrl: './price-calc.component.scss'
})
export class PriceCalcComponent implements OnInit {
  constructor(private tableserv:TableService){

  }
  screenHeight!:number
  screenWidth!:number
  sar!:table
  //
  gram!:number
  price!:number
  multi!:number
  //
  ngOnInit(): void {
    window.scroll(0,0);
    this.gram=1
    this.onResize('')
    this.tableserv.getsar().subscribe(x=>{
    this.sar=x
    this.sar.karat_14=+this.sar.karat_14
    
    this.sar.karat_18=+this.sar.karat_18
    this.sar.karat_21=+this.sar.karat_21
    this.sar.karat_22=+this.sar.karat_22
    this.sar.karat_24=+this.sar.karat_24
    })
    this.tableserv.getconstants().subscribe(x=>{
      x.map((x:any)=>{
        if(x.karat=="karat_24"){
          this.sar.karat_24+=Number(x.new)
          this.multi=this.sar.karat_24
        }
        else if(x.karat=="karat_22"){
          this.sar.karat_22+=Number(x.new)
        }
        else if(x.karat=="karat_21"){
          this.sar.karat_21+=Number(x.new)
        }
        else if(x.karat=="karat_18"){
          this.sar.karat_18+=Number(x.new)
        }
        else if(x.karat=="karat_14"){
          this.sar.karat_14+=Number(x.new)
        }
      })
    })
  }
  @HostListener('window:resize', ['$event'])
onResize(event:any) {
   this.screenHeight = window.innerHeight;
   this.screenWidth = window.innerWidth;
}
}
