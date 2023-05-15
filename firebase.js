// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvo-PJhxy-LAJ9R8HHMx4zPAF7k5W1YjI",
  authDomain: "azmeleeonline.firebaseapp.com",
  projectId: "azmeleeonline",
  storageBucket: "azmeleeonline.appspot.com",
  messagingSenderId: "235804410898",
  appId: "1:235804410898:web:58801ef1afe564c60ac4cb",
  measurementId: "G-2ERXBCR64H"
};

let analytics;

const app = initializeApp(firebaseConfig);

if (app.name && typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export const db = getFirestore(app);