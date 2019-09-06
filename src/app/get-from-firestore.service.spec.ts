import { TestBed } from '@angular/core/testing';

import { GetFromFirestoreService } from './get-from-firestore.service';

describe('GetFromFirestoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetFromFirestoreService = TestBed.get(GetFromFirestoreService);
    expect(service).toBeTruthy();
  });
});
