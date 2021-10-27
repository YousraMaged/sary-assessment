import { TestBed } from '@angular/core/testing';

import { HeroesHttpService } from './heroes-http.service';

describe('HeroesHttpService', () => {
  let service: HeroesHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroesHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
