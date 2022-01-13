import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HsaDocsComponent } from './hsa-docs.component';

describe('HsaDocsComponent', () => {
  let component: HsaDocsComponent;
  let fixture: ComponentFixture<HsaDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HsaDocsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HsaDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
