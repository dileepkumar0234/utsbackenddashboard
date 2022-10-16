import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalystslistComponent } from './analystslist.component';

describe('AnalystslistComponent', () => {
  let component: AnalystslistComponent;
  let fixture: ComponentFixture<AnalystslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalystslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalystslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
