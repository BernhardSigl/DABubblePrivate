import { TestBed } from '@angular/core/testing';

import { UserListService } from './user-list.service';
import { Firestore } from '@angular/fire/firestore';

class FirestoreStub {}

describe('UserListService', () => {
  let service: UserListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: Firestore, useClass: FirestoreStub  }],
    });
    service = TestBed.inject(UserListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
