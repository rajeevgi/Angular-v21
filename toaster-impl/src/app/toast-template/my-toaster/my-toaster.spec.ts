import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyToaster } from './my-toaster';

describe('MyToaster', () => {
  let component: MyToaster;
  let fixture: ComponentFixture<MyToaster>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyToaster],
    }).compileComponents();

    fixture = TestBed.createComponent(MyToaster);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
