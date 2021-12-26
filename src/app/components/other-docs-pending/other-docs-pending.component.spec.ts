import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherDocsPendingComponent } from './other-docs-pending.component';

describe('OtherDocsPendingComponent', () => {
  let component: OtherDocsPendingComponent;
  let fixture: ComponentFixture<OtherDocsPendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherDocsPendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherDocsPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
