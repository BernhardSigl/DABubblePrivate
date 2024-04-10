import { TestBed } from '@angular/core/testing';

import { AuthyService } from './authy.service';
import { Auth } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Firestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';

class FirestoreStub {}

describe('AuthyService', () => {
  let service: AuthyService;

  const firebaseConfig = {
    apiKey: "AIzaSyBRfI9pR2ib9qbcCAV8VkVoQDuKU_3TFig",
    authDomain: "dabubblesigl.firebaseapp.com",
    projectId: "dabubblesigl",
    storageBucket: "dabubblesigl.appspot.com",
    messagingSenderId: "468705576697",
    appId: "1:468705576697:web:0460e8eb5e6734b1f70428"
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(firebaseConfig),
      ],
      providers: [
        { provide: Auth, useValue: {} },
        { provide: Firestore, useClass: FirestoreStub }
      ],
    });
    service = TestBed.inject(AuthyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
