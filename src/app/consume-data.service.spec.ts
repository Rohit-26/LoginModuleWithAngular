import { TestBed, inject } from '@angular/core/testing';

import { ConsumeDataService } from './consume-data.service';

describe('ConsumeDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsumeDataService]
    });
  });

  it('should be created', inject([ConsumeDataService], (service: ConsumeDataService) => {
    expect(service).toBeTruthy();
  }));
});
