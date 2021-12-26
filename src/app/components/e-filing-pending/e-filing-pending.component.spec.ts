import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EFilingPendingComponent } from './e-filing-pending.component';

describe('EFilingPendingComponent', () => {
  let component: EFilingPendingComponent;
  let fixture: ComponentFixture<EFilingPendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EFilingPendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EFilingPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
