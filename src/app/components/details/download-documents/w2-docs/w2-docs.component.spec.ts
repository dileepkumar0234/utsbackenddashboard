import { ComponentFixture, TestBed } from '@angular/core/testing';

import { W2DocsComponent } from './w2-docs.component';

describe('W2DocsComponent', () => {
  let component: W2DocsComponent;
  let fixture: ComponentFixture<W2DocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ W2DocsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(W2DocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
