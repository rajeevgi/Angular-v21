import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgPattern } from './ng-pattern';

describe('NgPattern', () => {
  let component: NgPattern;
  let fixture: ComponentFixture<NgPattern>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgPattern],
    }).compileComponents();

    fixture = TestBed.createComponent(NgPattern);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
