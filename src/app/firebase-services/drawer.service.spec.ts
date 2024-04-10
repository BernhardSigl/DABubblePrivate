import { TestBed } from '@angular/core/testing';

import { DrawerService } from './drawer.service';
import { Firestore } from '@angular/fire/firestore';

class FirestoreStub {}

describe('DrawerService', () => {
  let service: DrawerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: Firestore, useClass: FirestoreStub  }],
    });
    service = TestBed.inject(DrawerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
