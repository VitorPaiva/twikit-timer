import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TimerLineModule } from '../timer-line/timer-line.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { TimeTableComponent } from './time-table.component';

@NgModule({
  declarations: [
    TimeTableComponent,
  ],
  imports: [
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    TimerLineModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  exports: [TimeTableComponent]
})
export class TimeTableModule { }
