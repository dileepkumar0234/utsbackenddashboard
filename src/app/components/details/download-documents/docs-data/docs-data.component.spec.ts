import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsDataComponent } from './docs-data.component';

describe('DocsDataComponent', () => {
  let component: DocsDataComponent;
  let fixture: ComponentFixture<DocsDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocsDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
