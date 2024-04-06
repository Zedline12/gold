import { Component, OnInit } from '@angular/core';
import { TableService } from '../../services/tables.service';
import { table } from '../../models/table';
import { BlogService } from '../../services/blog.service';
import { blog } from '../../models/blog';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  sar!:table
  blogs!:blog[]
  comission!:{id:number,new:number,karat:string}[]
  constructor(private tableserv:TableService,private blogserv:BlogService){

  }
  const(karat:string){
    return Number(this.comission.find(x=>x.karat==karat)?.new)
   }
  ngOnInit(): void {  
    this.blogserv.getblogs().subscribe(x=>{
      this.blogs=x
      console.log(x)
    })
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
