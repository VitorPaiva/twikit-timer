import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerLineComponent } from './timer-line.component';

describe('TimerLineComponent', () => {
  let component: TimerLineComponent;
  let fixture: ComponentFixture<TimerLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
