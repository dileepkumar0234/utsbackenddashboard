import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetNewFileNumberComponent } from './set-new-file-number.component';

describe('SetNewFileNumberComponent', () => {
  let component: SetNewFileNumberComponent;
  let fixture: ComponentFixture<SetNewFileNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetNewFileNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetNewFileNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
