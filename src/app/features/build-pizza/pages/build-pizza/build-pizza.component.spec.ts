import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'app/shared/shared.module';

import { BuildPizzaComponent } from './build-pizza.component';
import { ComponentsModule } from '../../components/components.module';

describe('BuildPizzaComponent', () => {
  let component: BuildPizzaComponent;
  let fixture: ComponentFixture<BuildPizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        BuildPizzaComponent
      ],
      imports: [
        RouterTestingModule,
        SharedModule,
        ComponentsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
