import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';

import {routes} from './app.routes';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {AngularFireModule, FIREBASE_OPTIONS} from '@angular/fire/compat';
import {getAuth, provideAuth} from '@angular/fire/auth';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import {AngularFireDatabaseModule} from '@angular/fire/compat/database';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import {providePrimeNG} from 'primeng/config';
import Aura from '@primeng/themes/aura';

const firebaseConfig = {
  apiKey: "AIzaSyBxEF4t5kR9GXnbsM-3wqaqF7mIAnfxF9U",
  authDomain: "instadeep-angularapp.firebaseapp.com",
  databaseURL: "https://instadeep-angularapp-default-rtdb.firebaseio.com",
  projectId: "instadeep-angularapp",
  storageBucket: "instadeep-angularapp.firebasestorage.app",
  messagingSenderId: "993427088583",
  appId: "1:993427088583:web:1287c33556d7973fd9cae2",
  measurementId: "G-FZSZ83N8WD"
};
export const appConfig: ApplicationConfig = {
  providers: [
    {provide: FIREBASE_OPTIONS, useValue: firebaseConfig},
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    importProvidersFrom(
      AngularFireModule.initializeApp(firebaseConfig),
      AngularFireAuthModule,
      AngularFireDatabaseModule,
      AngularFirestoreModule
    ),
    providePrimeNG({
      theme: {
        preset: Aura
      }
    })
  ]
};

