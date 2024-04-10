import { TestBed } from '@angular/core/testing';

import { FirebaseService } from './firebase.service';
import { Firestore } from '@angular/fire/firestore';

class FirestoreStub {}

describe('FirebaseService', () => {
  let service: FirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: Firestore, useClass: FirestoreStub  }],
    });
    service = TestBed.inject(FirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
