import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value:number, ...args: unknown[]): unknown {
    const length=value.toString().length
    const strvalue=value.toString()
    if(length==9 ||(length==6 &&!strvalue.includes("."))){ 
      return strvalue.slice(0, 3) + "," + strvalue.slice(3)
    }
    if(length==8 ||(length==5 &&!strvalue.includes("."))){ 
      return strvalue.slice(0, 2) + "," + strvalue.slice(2)
    }
    if(length==7 ||(length==4 &&!strvalue.includes("."))){ 
      return strvalue.slice(0, 1) + "," + strvalue.slice(1)
    }
    return value;
  }

}
