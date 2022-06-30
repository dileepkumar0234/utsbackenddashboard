import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetEmailAddressComponent } from './set-email-address.component';

describe('SetEmailAddressComponent', () => {
  let component: SetEmailAddressComponent;
  let fixture: ComponentFixture<SetEmailAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetEmailAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetEmailAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
