import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedFileNumberComponent } from './assigned-file-number.component';

describe('AssignedFileNumberComponent', () => {
  let component: AssignedFileNumberComponent;
  let fixture: ComponentFixture<AssignedFileNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignedFileNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedFileNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
