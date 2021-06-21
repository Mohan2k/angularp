import { TestBed, inject } from '@angular/core/testing';

import { HelpLoginService } from './help-login.service';

describe('HelpLoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HelpLoginService]
    });
  });

  it('should be created', inject([HelpLoginService], (service: HelpLoginService) => {
    expect(service).toBeTruthy();
  }));
});
