import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCYwzCtWyxUfRcJGrkGoJkm2WHZmsBvp90",
    authDomain: "tenders-d345e.firebaseapp.com",
    projectId: "tenders-d345e",
    storageBucket: "tenders-d345e.appspot.com",
    messagingSenderId: "750262376494",
    appId: "1:750262376494:web:6f3370ef8a325daeffa7bf",
    measurementId: "G-XBT7HK9RGS"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;