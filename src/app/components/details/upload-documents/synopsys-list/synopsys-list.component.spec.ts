import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SynopsysListComponent } from './synopsys-list.component';

describe('SynopsysListComponent', () => {
  let component: SynopsysListComponent;
  let fixture: ComponentFixture<SynopsysListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SynopsysListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SynopsysListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
