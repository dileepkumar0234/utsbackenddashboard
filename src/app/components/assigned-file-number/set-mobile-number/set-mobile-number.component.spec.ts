import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetMobileNumberComponent } from './set-mobile-number.component';

describe('SetMobileNumberComponent', () => {
  let component: SetMobileNumberComponent;
  let fixture: ComponentFixture<SetMobileNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetMobileNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetMobileNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
