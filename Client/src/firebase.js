// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-46884.firebaseapp.com",
  projectId: "mern-blog-46884",
  storageBucket: "mern-blog-46884.appspot.com",
  messagingSenderId: "164490875057",
  appId: "1:164490875057:web:c1138e84183c3a83fb1290",
  measurementId: "G-X7KGGBFT4M"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);