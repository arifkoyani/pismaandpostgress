// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAQZrmmHR1sGsQP4t9MEzmSqhwJLMXr7ZQ",
  authDomain: "offf-16525.firebaseapp.com",
  projectId: "offf-16525",
  storageBucket: "offf-16525.appspot.com",
  messagingSenderId: "574456014564",
  appId: "1:574456014564:web:ff1a78b1c692f7679b2ef1",
  measurementId: "G-G13RVK1QXJ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);