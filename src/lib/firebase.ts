import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; 
import { getFirestore } from 'firebase/firestore'; 
import { getStorage } from 'firebase/storage'; 



const firebaseConfig = {
  apiKey: "AIzaSyCewEI0fJzilunLocO1daEKLSPMEDbjhgM",
  authDomain: "reactchat-dae5e.firebaseapp.com",
  projectId: "reactchat-dae5e",
  storageBucket: "reactchat-dae5e.appspot.com",
  messagingSenderId: "141336218854",
  appId: "1:141336218854:web:3af94b5315ade8162d3f27"
};

// Firebase dasturini ishga tushiring
const app = initializeApp(firebaseConfig);

// Auth ob'ektini oling
export const auth = getAuth(app);
export const db = getFirestore(app); 
export const storage = getStorage(app); 