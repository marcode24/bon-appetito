import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnHomeComponent } from './btn-home.component';

describe('BtnHomeComponent', () => {
  let component: BtnHomeComponent;
  let fixture: ComponentFixture<BtnHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
