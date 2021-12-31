import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToCallComponent } from './to-call.component';

describe('ToCallComponent', () => {
  let component: ToCallComponent;
  let fixture: ComponentFixture<ToCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToCallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
