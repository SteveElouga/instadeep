export interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}

export interface Environment {
  production: boolean;
  firebase: FirebaseConfig;
}
export const environment: Environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyBxEF4t5kR9GXnbsM-3wqaqF7mIAnfxF9U",
    authDomain: "instadeep-angularapp.firebaseapp.com",
    projectId: "instadeep-angularapp",
    storageBucket: "instadeep-angularapp.firebasestorage.app",
    messagingSenderId: "993427088583",
    appId: "1:993427088583:web:1287c33556d7973fd9cae2",
    measurementId: "G-FZSZ83N8WD"
  },
};
