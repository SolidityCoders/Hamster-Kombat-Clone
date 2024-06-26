import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  // Replace with your Firebase configuration
  apiKey: "AIzaSyBPeGGz-XZsrbGyXvAptxitSJO6WP3FKNI",
  authDomain: "telegramss.firebaseapp.com",
  projectId: "telegramss",
  storageBucket: "telegramss.appspot.com",
  messagingSenderId: "510281795152",
  appId: "1:510281795152:web:6c7eda4041bc7faeb6f355"
};




const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
