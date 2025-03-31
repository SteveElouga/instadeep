import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';

import { routes } from './app.routes';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import {getAuth, provideAuth} from '@angular/fire/auth';
import {environment} from '../environments/environment';

const firebaseConfig = {
  apiKey: "AIzaSyBxEF4t5kR9GXnbsM-3wqaqF7mIAnfxF9U",
  authDomain: "instadeep-angularapp.firebaseapp.com",
  projectId: "instadeep-angularapp",
  storageBucket: "instadeep-angularapp.firebasestorage.app",
  messagingSenderId: "993427088583",
  appId: "1:993427088583:web:1287c33556d7973fd9cae2",
  measurementId: "G-FZSZ83N8WD"
};
export const appConfig: ApplicationConfig = {
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: firebaseConfig },
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth())
  ]
};
