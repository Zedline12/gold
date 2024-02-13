import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TableService } from '../../services/tables.service';
import { table } from '../../models/table';
@Component({
  selector: 'app-karat',
  templateUrl: './karat.component.html',
  styleUrl: './karat.component.scss'
})
export class KaratComponent {
  karat!:string
  sar!:table;
  title!:string;
  karatt:{karatusd:number,karatsar:number,date:any}={karatusd:1,karatsar:1,date:""}
  constants:{id:number,karat:string,new:number,used:number}[]=[]
  constructor(
    private route: ActivatedRoute,
    private tableserv:TableService
  ) {}
  const(karat:string){
    return this.constants.find(x=>x.karat==karat)
   }
  ngOnInit() {
    this.tableserv.getconstants().subscribe(x=>{
      this.constants=x
      console.log(x)
      this.constants.map((x:any)=>{
        x.new=+x.new;
        x.used=+x.used;
        
      })
     
    })
    this.route.params.subscribe(params=>{
      this.karat=params['karat']
    //  console.log(this.karat)
    })
    this.tableserv.getsar().subscribe(x=>{
      this.sar=x
      this.sar.karat_24=+this.sar.karat_24
      this.sar.karat_22=+this.sar.karat_22
      this.sar.karat_21=+this.sar.karat_21
      this.sar.karat_18=+this.sar.karat_18
      this.sar.karat_14=+this.sar.karat_14
      if(this.karat=="karat_24"){
        this.karatt.karatsar=this.sar.karat_24
        this.title="سعر جرام الذهب عيار 24"
        this.karatt.date=this.sar._date
      }
      else if(this.karat=="karat_22"){
        this.title="سعر جرام الذهب عيار 22"
        this.karatt.karatsar=this.sar.karat_22
      }
      else if(this.karat=="karat_21"){
        this.title="سعر جرام الذهب عيار 21"
        this.karatt.karatsar=this.sar.karat_21
      }
      else if(this.karat=="karat_18"){
        this.title="سعر جرام الذهب عيار 18"
        this.karatt.karatsar=this.sar.karat_18
      }
      else if(this.karat=="karat_14"){
        this.title="سعر جرام الذهب عيار 14"
        this.karatt.karatsar=this.sar.karat_14
      }
     
    })
    this.tableserv.getusd().subscribe(x=>{
      if(this.karat=="karat_24"){
        this.karatt.karatusd=x.karat_24
        this.karatt.date=x._date
      }
      else if(this.karat=="karat_22"){
        this.karatt.karatusd=x.karat_22
      }
      else if(this.karat=="karat_21"){
        this.karatt.karatusd=x.karat_21
      }
      else if(this.karat=="karat_18"){
        this.karatt.karatusd=x.karat_18
      }
      else if(this.karat=="karat_14"){
        this.karatt.karatusd=x.karat_14
      }
      console.log(this.karatt);
    })
  }
}
