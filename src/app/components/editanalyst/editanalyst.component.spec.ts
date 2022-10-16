import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditanalystComponent } from './editanalyst.component';

describe('EditanalystComponent', () => {
  let component: EditanalystComponent;
  let fixture: ComponentFixture<EditanalystComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditanalystComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditanalystComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
