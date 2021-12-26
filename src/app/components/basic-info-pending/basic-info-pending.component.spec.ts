import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInfoPendingComponent } from './basic-info-pending.component';

describe('BasicInfoPendingComponent', () => {
  let component: BasicInfoPendingComponent;
  let fixture: ComponentFixture<BasicInfoPendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicInfoPendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicInfoPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
