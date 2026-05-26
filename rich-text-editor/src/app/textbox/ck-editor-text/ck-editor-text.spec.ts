import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CkEditorText } from './ck-editor-text';

describe('CkEditorText', () => {
  let component: CkEditorText;
  let fixture: ComponentFixture<CkEditorText>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CkEditorText],
    }).compileComponents();

    fixture = TestBed.createComponent(CkEditorText);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
