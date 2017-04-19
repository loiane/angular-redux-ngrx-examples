import { TestBed, inject } from '@angular/core/testing';

import { LessonsService } from './lessons.service';

describe('LessonsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LessonsService]
    });
  });

  it('should ...', inject([LessonsService], (service: LessonsService) => {
    expect(service).toBeTruthy();
  }));
});
