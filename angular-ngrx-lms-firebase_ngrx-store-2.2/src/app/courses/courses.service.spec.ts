import { TestBed, inject } from '@angular/core/testing';

import { CoursesService } from './courses.service';

describe('CoursesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoursesService]
    });
  });

  it('should ...', inject([CoursesService], (service: CoursesService) => {
    expect(service).toBeTruthy();
  }));
});
