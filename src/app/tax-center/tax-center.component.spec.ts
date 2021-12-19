import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxCenterComponent } from './tax-center.component';

describe('TaxCenterComponent', () => {
  let component: TaxCenterComponent;
  let fixture: ComponentFixture<TaxCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
