import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparationPendingComponent } from './preparation-pending.component';

describe('PreparationPendingComponent', () => {
  let component: PreparationPendingComponent;
  let fixture: ComponentFixture<PreparationPendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreparationPendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreparationPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
