import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsPizzaComponent } from './options-pizza.component';
import { SharedModule } from 'app/shared/shared.module';

describe('OptionsPizzaComponent', () => {
  let component: OptionsPizzaComponent;
  let fixture: ComponentFixture<OptionsPizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        OptionsPizzaComponent
      ],
      imports: [
        SharedModule
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
