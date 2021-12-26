import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsUploadPendingComponent } from './documents-upload-pending.component';

describe('DocumentsUploadPendingComponent', () => {
  let component: DocumentsUploadPendingComponent;
  let fixture: ComponentFixture<DocumentsUploadPendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentsUploadPendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentsUploadPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
