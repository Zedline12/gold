import { Component,HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-calc',
  templateUrl: './price-calc.component.html',
  styleUrl: './price-calc.component.scss'
})
export class PriceCalcComponent implements OnInit {
  screenHeight!:number
  screenWidth!:number
  ngOnInit(): void {
    window.scroll(0,0);
    this.onResize('')
  }
  @HostListener('window:resize', ['$event'])
onResize(event:any) {
   this.screenHeight = window.innerHeight;
   this.screenWidth = window.innerWidth;
}
}
