import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 oddNumbers: number[] = [];
 evenNumbers: number[] = [];


  onEventStarted(Firednumber: number) {
      
     // console.log(Firednumber);
      
      if (Firednumber % 2 === 0) {
            this.evenNumbers.push(Firednumber);
      }else {
             this.oddNumbers.push(Firednumber);
         }
  }

}
