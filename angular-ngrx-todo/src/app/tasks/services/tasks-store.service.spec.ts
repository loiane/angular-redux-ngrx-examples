import { TestBed, inject } from '@angular/core/testing';

import { TasksStoreService } from './tasks-store.service';

describe('TasksStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TasksStoreService]
    });
  });

  it('should ...', inject([TasksStoreService], (service: TasksStoreService) => {
    expect(service).toBeTruthy();
  }));
});
