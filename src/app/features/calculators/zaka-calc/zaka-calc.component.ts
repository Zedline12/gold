import { Component, OnInit,HostListener } from '@angular/core';

@Component({
  selector: 'app-zaka-calc',
  templateUrl: './zaka-calc.component.html',
  styleUrl: './zaka-calc.component.scss'
})
export class ZakaCalcComponent implements OnInit {
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
