import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxServicesComponent } from './tax-services.component';

describe('TaxServicesComponent', () => {
  let component: TaxServicesComponent;
  let fixture: ComponentFixture<TaxServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
