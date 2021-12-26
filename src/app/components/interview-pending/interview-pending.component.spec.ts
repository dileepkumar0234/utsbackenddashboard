import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewPendingComponent } from './interview-pending.component';

describe('InterviewPendingComponent', () => {
  let component: InterviewPendingComponent;
  let fixture: ComponentFixture<InterviewPendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewPendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
