import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLeftbarComponent } from './user-leftbar.component';

describe('UserLeftbarComponent', () => {
  let component: UserLeftbarComponent;
  let fixture: ComponentFixture<UserLeftbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLeftbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLeftbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
