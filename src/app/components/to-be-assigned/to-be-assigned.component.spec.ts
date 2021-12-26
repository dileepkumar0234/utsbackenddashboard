import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToBeAssignedComponent } from './to-be-assigned.component';

describe('ToBeAssignedComponent', () => {
  let component: ToBeAssignedComponent;
  let fixture: ComponentFixture<ToBeAssignedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToBeAssignedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToBeAssignedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
