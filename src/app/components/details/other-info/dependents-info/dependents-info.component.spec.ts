import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependentsInfoComponent } from './dependents-info.component';

describe('DependentsInfoComponent', () => {
  let component: DependentsInfoComponent;
  let fixture: ComponentFixture<DependentsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DependentsInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DependentsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
