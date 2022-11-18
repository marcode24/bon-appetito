import { TestBed } from '@angular/core/testing';

import { BuilderPizzaService } from './builder-pizza.service';

describe('BuilderPizzaService', () => {
  let service: BuilderPizzaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuilderPizzaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
