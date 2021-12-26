import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulingPendingComponent } from './scheduling-pending.component';

describe('SchedulingPendingComponent', () => {
  let component: SchedulingPendingComponent;
  let fixture: ComponentFixture<SchedulingPendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulingPendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulingPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
