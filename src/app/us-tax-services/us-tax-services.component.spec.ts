import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsTaxServicesComponent } from './us-tax-services.component';

describe('UsTaxServicesComponent', () => {
  let component: UsTaxServicesComponent;
  let fixture: ComponentFixture<UsTaxServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsTaxServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsTaxServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
