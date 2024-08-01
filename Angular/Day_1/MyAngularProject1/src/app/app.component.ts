import { Component } from '@angular/core';
import { CalculatorService } from './calculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // name :String;
  // age : Number;
  // email : string;
  // pic:string;
  // fname:string;
  // flag:boolean;
  // vehicles:string[];
  // selec:string;
  sum:Number;
  sub:Number;
  // myStyle:{};
  constructor(private cal:CalculatorService){
    // this.name = "dhanushplr";
    // this.age = 20;
    // this.email = "dhanush@gmail.com"
    // this.pic="https://t3.ftcdn.net/jpg/05/51/73/04/360_F_551730491_3Keiwz8AzY4ts0Az0VJjsVvgoFMmk8ni.jpg";
    // this.fname=" ";
    // this.flag=true;
    // this.vehicles=["series 5","m4","m5","Invalid"]
    // this.selec="";
    // this.myStyle={'width':'10%','height':'10%','border':'2px solid red','border-radius':'25px','padding':'20px'
      this.sum=cal.getAddtion(10,20);
      this.sub=cal.getSubtraction(30,10);
    }
  }
//   changename(){
//     this.name="Dhanush";
//     this.age=21;
//     this.email="dhanushr@gmail.com"
//   }
//   redo(){
//     this.pic="https://img.freepik.com/premium-photo/classic-big-bike-motorcycle-background-wallpaper-free-download-images_63106-1634.jpg";
//   }
//   changeflag(){
//     this.flag=!this.flag;
//   }  
//   setSelectedItem(v:string){
//     this.selec=v;
//   }
//   selectedVehicle(){

//   }
// }