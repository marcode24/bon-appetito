import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnBackComponent } from './btn-back.component';

describe('BtnBackComponent', () => {
  let component: BtnBackComponent;
  let fixture: ComponentFixture<BtnBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
