import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { States } from './states';

@Component({
  selector: 'app-timer-line',
  templateUrl: './timer-line.component.html',
  styleUrls: ['./timer-line.component.scss']
})
export class TimerLineComponent implements OnInit {

  @Output() timeEvent = new EventEmitter<number>();
  disabled = false;
  creationTime = Date.now();
  time = 0;
  interval: any;
  states = States
  text: string;
  color: string;
  constructor() { 
    this.text = this.states.play.text
    this.color = this.states.play.color
    this.interval = undefined;
  }

  ngOnInit(): void {
    
  }

  changeState(): void{
    if( this.text === 'Stop' ) {
      this.states.stop.class.splice(-1)
      this.states.done.class = [...this.states.done.class, 'play']
      this.states.stop.class = [...this.states.stop.class]
      this.disabled = true;
      this.text = this.states.done.text
      clearInterval(this.interval)
      this.timeEvent.emit()
    } 
    else {
      const startingTime = Date.now()
      this.states.play.class = [...this.states.play.class, 'play']
      this.states.stop.class = [...this.states.stop.class, 'play']
      this.text = this.states.stop.text
      this.color = this.states.stop.color
      this.interval = setInterval(() => {
        this.time = (Date.now() - startingTime)/1000
      }, 10)
    }

  }

}
