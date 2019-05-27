import { TestBed } from '@angular/core/testing';

import { FormularyService } from './formulary.service';

describe('FormularyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormularyService = TestBed.get(FormularyService);
    expect(service).toBeTruthy();
  });
});
