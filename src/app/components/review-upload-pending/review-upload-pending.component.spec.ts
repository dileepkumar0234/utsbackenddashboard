import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewUploadPendingComponent } from './review-upload-pending.component';

describe('ReviewUploadPendingComponent', () => {
  let component: ReviewUploadPendingComponent;
  let fixture: ComponentFixture<ReviewUploadPendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewUploadPendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewUploadPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
