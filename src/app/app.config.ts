import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { routes } from './app.routes';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    AngularFirestoreModule,
    provideRouter(routes),
    provideAnimations(),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          apiKey: "AIzaSyBRfI9pR2ib9qbcCAV8VkVoQDuKU_3TFig",
          authDomain: "dabubblesigl.firebaseapp.com",
          projectId: "dabubblesigl",
          storageBucket: "dabubblesigl.appspot.com",
          messagingSenderId: "468705576697",
          appId: "1:468705576697:web:0460e8eb5e6734b1f70428"
        })
      )
    ),
    importProvidersFrom(provideAuth(() => getAuth())),
    importProvidersFrom(provideFirestore(() => getFirestore()))
  ],
};
