import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TimerLineComponent } from '../timer-line/timer-line.component';

@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.css']
})
export class TimeTableComponent implements OnInit {
  ascending = true;
  times: TimerLineComponent[] = [new TimerLineComponent()];

  ngOnInit(): void {
    
  }
  
  addTimerLine(){
    this.times.push(new TimerLineComponent())
  }

  clear() {
    this.times = [new TimerLineComponent()];
  }

  sort(){
    const current = this.times.splice(-1)
    this.times.sort((a, b) => {
      return this.ascending ? 
        a.creationTime > b.creationTime ? -1 : 1  
        : a.creationTime > b.creationTime ? 1 : -1  
    })
    this.times = [...this.times, ...current]
    this.ascending = !this.ascending;
  }

}