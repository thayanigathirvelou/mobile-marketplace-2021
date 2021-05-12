import { TestBed } from '@angular/core/testing';

import { DataAccess.Service } from './data-access..service';

describe('DataAccess.Service', () => {
  let service: DataAccess.Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataAccess.Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
