import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewConfirmationPendingComponent } from './review-confirmation-pending.component';

describe('ReviewConfirmationPendingComponent', () => {
  let component: ReviewConfirmationPendingComponent;
  let fixture: ComponentFixture<ReviewConfirmationPendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewConfirmationPendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewConfirmationPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
