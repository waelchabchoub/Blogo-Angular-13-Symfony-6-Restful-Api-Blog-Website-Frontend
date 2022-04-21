import { TestBed } from '@angular/core/testing';

import { BlogoService } from './blogo.service';

describe('BlogoService', () => {
  let service: BlogoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
