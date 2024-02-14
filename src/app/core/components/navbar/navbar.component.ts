import { Component, OnInit } from '@angular/core';
import { TableService } from '../../services/tables.service';
import { table } from '../../models/table';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  sar!:table
  comission!:{id:number,new:number,karat:string}[]
  constructor(private tableserv:TableService){

  }
  const(karat:string){
    return Number(this.comission.find(x=>x.karat==karat)?.new)
   }
  ngOnInit(): void {  
      this.tableserv.getsar().subscribe(x=>{
        this.sar=x
        this.sar.karat_24=+this.sar.karat_24
        this.sar.karat_22=+this.sar.karat_22
        this.sar.karat_21=+this.sar.karat_21
        this.sar.karat_18=+this.sar.karat_18
        this.sar.karat_14=+this.sar.karat_14
      },err=>{
        console.log(err)
      })
      this.tableserv.getconstants().subscribe(x=>{
       this.comission=x
       
      },err=>{

      })
  }
}
