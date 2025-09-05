import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA2DqPF5M8J3_Ls9y25QEnj04YiSOjrHPY',
  authDomain: 'chatmate-ecd64.firebaseapp.com',
  projectId: 'chatmate-ecd64',
  storageBucket: 'chatmate-ecd64.firebasestorage.app',
  messagingSenderId: '902485820017',
  appId: '1:902485820017:web:30491319a2ffe88e7391d0',
  measurementId: 'G-1QB1ET4REJ',
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;
