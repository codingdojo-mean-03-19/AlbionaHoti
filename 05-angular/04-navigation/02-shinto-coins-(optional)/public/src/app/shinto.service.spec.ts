import { TestBed } from '@angular/core/testing';

import { ShintoService } from './shinto.service';

describe('ShintoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShintoService = TestBed.get(ShintoService);
    expect(service).toBeTruthy();
  });
});
