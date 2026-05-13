import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDatepicker } from './ng-datepicker';

describe('NgDatepicker', () => {
  let component: NgDatepicker;
  let fixture: ComponentFixture<NgDatepicker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgDatepicker],
    }).compileComponents();

    fixture = TestBed.createComponent(NgDatepicker);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
