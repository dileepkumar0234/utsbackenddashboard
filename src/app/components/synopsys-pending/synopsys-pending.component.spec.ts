import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SynopsysPendingComponent } from './synopsys-pending.component';

describe('SynopsysPendingComponent', () => {
  let component: SynopsysPendingComponent;
  let fixture: ComponentFixture<SynopsysPendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SynopsysPendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SynopsysPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
