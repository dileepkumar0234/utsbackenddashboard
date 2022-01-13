import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscDocsComponent } from './misc-docs.component';

describe('MiscDocsComponent', () => {
  let component: MiscDocsComponent;
  let fixture: ComponentFixture<MiscDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiscDocsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiscDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
