import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRefferralComponent } from './user-refferral.component';

describe('UserRefferralComponent', () => {
  let component: UserRefferralComponent;
  let fixture: ComponentFixture<UserRefferralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRefferralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRefferralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
