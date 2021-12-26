import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreSynopsysPendingComponent } from './pre-synopsys-pending.component';

describe('PreSynopsysPendingComponent', () => {
  let component: PreSynopsysPendingComponent;
  let fixture: ComponentFixture<PreSynopsysPendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreSynopsysPendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreSynopsysPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
