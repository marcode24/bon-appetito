import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewPizzaComponent } from './preview-pizza.component';

describe('PreviewPizzaComponent', () => {
  let component: PreviewPizzaComponent;
  let fixture: ComponentFixture<PreviewPizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewPizzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
