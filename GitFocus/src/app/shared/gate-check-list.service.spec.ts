import { TestBed } from '@angular/core/testing';

import { GateCheckListService } from './gate-check-list.service';

describe('GateCheckListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GateCheckListService = TestBed.get(GateCheckListService);
    expect(service).toBeTruthy();
  });
});
