import { initializeApp } from 'firebase/app';

import { getMessaging } from "firebase/messaging";
import { getFirestore } from "firebase/firestore"

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcTLFqf5BCjwIGkofk8hLIrCykr-967dY",
  authDomain: "blix-react.firebaseapp.com",
  projectId: "blix-react",
  storageBucket: "blix-react.appspot.com",
  messagingSenderId: "732763341827",
  appId: "1:732763341827:web:d1f8d8483921a53fbf7a36"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const messaging = getMessaging(app);

export { db, messaging }