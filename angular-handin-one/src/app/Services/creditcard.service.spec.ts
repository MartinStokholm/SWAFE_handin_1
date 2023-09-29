import { TestBed } from '@angular/core/testing';

import { CreditCardService } from './creditcard.service';

describe('CreditcardService', () => {
  let service: CreditCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreditCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
