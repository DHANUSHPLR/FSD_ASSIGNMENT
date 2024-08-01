import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
Injectable()
export class CalculatorService {
      getAddtion(a:number,b:number){
        return a+b;
      }
      getSubtraction(a:number,b:number){
        return a-b;
      }

  // constructor() { }
}
