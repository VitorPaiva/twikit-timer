import { NgModule } from '@angular/core';
import { TimerLineComponent } from './timer-line.component';
import { MatListModule } from '@angular/material/list'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  imports: [ MatListModule, MatDividerModule, MatButtonModule, MatIconModule],
  declarations: [
    TimerLineComponent
  ],
  providers: [
      
  ],
  exports: [TimerLineComponent]
})
export class TimerLineModule { }
