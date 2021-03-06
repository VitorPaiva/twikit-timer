import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TimerLineModule } from './timer-line/timer-line.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { TimeTableModule } from './time-table/time-table.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    TimerLineModule,
    TimeTableModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
