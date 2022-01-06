import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetOldFileNumberComponent } from './set-old-file-number.component';

describe('SetOldFileNumberComponent', () => {
  let component: SetOldFileNumberComponent;
  let fixture: ComponentFixture<SetOldFileNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetOldFileNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetOldFileNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
