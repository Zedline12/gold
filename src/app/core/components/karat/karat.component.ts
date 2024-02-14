import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TableService } from '../../services/tables.service';
import { table } from '../../models/table';
import { Title } from '@angular/platform-browser';
import  moment from 'moment';
@Component({
  selector: 'app-karat',
  templateUrl: './karat.component.html',
  styleUrl: './karat.component.scss'
})
export class KaratComponent {
  lastupdate!:number
  karat!:string
  sar!:any;
  title!:string;
  sarhistory!:any[]
  eyar!:number;
  karatt:{karatusd:number,karatsar:number,date:any}={karatusd:1,karatsar:1,date:"efe"}
  karatthistory!:any
  constants:{id:number,karat:string,new:number,used:number}[]=[]
  constructor(private route: ActivatedRoute,private tableserv:TableService,private titleService: Title) {
  
  }
  const(karat:string){
    return this.constants.find(x=>x.karat==karat)
   }
  ngOnInit() {
    this.tableserv.getsarhistory().subscribe(x=>{
      this.sarhistory=x
      this.sarhistory.map((x)=>{
        x.karat_14=+x.karat_14
        x.karat_18=+x.karat_18
        x.karat_21=+x.karat_21
        x.karat_22=+x.karat_22
        x.karat_24=+x.karat_24
        if(this.karat=="karat_24"){
         x.karatt=x.karat_24
        }
        else if(this.karat=="karat_22"){
          x.karatt=x.karat_22
        }
        else if(this.karat=="karat_21"){
          x.karatt=x.karat_21
        }
        else if(this.karat=="karat_18"){
          x.karatt=x.karat_18
        }
        else if(this.karat=="karat_14"){
          x.karatt=x.karat_14
        }
      })
      console.log(this.sarhistory)
    })
    this.tableserv.getconstants().subscribe(x=>{
      this.constants=x
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
      this.lastupdate=Number(moment(x._date).fromNow().replace(/\D/g,''));
      this.sar=x
      this.sar.karat_24=+this.sar.karat_24
      this.sar.karat_22=+this.sar.karat_22
      this.sar.karat_21=+this.sar.karat_21
      this.sar.karat_18=+this.sar.karat_18
      this.sar.karat_14=+this.sar.karat_14
      if(this.karat=="karat_24"){
        this.eyar=24;
        this.karatt.karatsar=this.sar.karat_24
        this.title="سعر جرام الذهب عيار 24"
        this.karatt.date=this.sar._date
      }
      else if(this.karat=="karat_22"){
        this.eyar=22
        this.title="سعر جرام الذهب عيار 22"
        this.karatt.karatsar=this.sar.karat_22
        this.karatt.date=this.sar._date
      }
      else if(this.karat=="karat_21"){
        this.eyar=21
        this.title="سعر جرام الذهب عيار 21"
        this.karatt.karatsar=this.sar.karat_21
        this.karatt.date=this.sar._date
      }
      else if(this.karat=="karat_18"){
        this.eyar=18
        this.title="سعر جرام الذهب عيار 18"
        this.karatt.karatsar=this.sar.karat_18
        this.karatt.date=this.sar._date
      }
      else if(this.karat=="karat_14"){
        this.eyar=14
        this.title="سعر جرام الذهب عيار 14"
        this.karatt.karatsar=this.sar.karat_14
        this.karatt.date=this.sar._date
      }
      this.titleService.setTitle(this.title);
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

    })
  }
}
