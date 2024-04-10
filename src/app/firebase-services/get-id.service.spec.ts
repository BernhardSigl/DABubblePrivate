import { TestBed } from '@angular/core/testing';

import { GetIdService } from './get-id.service';
import { Firestore } from '@angular/fire/firestore';

class FirestoreStub {}

describe('GetIdService', () => {
  let service: GetIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: Firestore, useClass: FirestoreStub  }],
    });
    service = TestBed.inject(GetIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
