import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IraDocsComponent } from './ira-docs.component';

describe('IraDocsComponent', () => {
  let component: IraDocsComponent;
  let fixture: ComponentFixture<IraDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IraDocsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IraDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
