import { TestBed } from '@angular/core/testing';

import { PelículaService } from './pelicula.service';

describe('PeliculaService', () => {
  let service: PelículaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PelículaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
