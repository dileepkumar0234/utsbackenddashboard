import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndianTaxServicesComponent } from './indian-tax-services.component';

describe('IndianTaxServicesComponent', () => {
  let component: IndianTaxServicesComponent;
  let fixture: ComponentFixture<IndianTaxServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndianTaxServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndianTaxServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
