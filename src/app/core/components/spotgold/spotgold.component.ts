import { Component, OnInit } from '@angular/core';
import { TableService } from '../../services/tables.service';

@Component({
  selector: 'app-spotgold',
  templateUrl: './spotgold.component.html',
  styleUrl: './spotgold.component.scss'
})
export class SpotgoldComponent implements OnInit {
  spot!:any
constructor(private tableserv:TableService){

}
  ngOnInit(): void {
    this.tableserv.getspot().subscribe(x=>{
      this.spot=x
      console.log(x)
    })
  }
}
