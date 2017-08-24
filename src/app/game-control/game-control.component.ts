import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
 
  
  @Output() Startevent = new EventEmitter<number>();
  i = 0;
  ref;

  constructor() { }

  ngOnInit() {
  }
    
    //emits events every second after game starts
    onStartGame() {
        

        this.ref = setInterval(()=>{
          this.Startevent.emit(this.i);  
          this.i = this.i + 1;
        }, 1000);

        
    }
    
    onStopGame() {
        
        clearInterval(this.ref);
        
    }

}
