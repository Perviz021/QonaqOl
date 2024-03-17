import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBizB8HuSzafzb3wZT0-I3tZBlKEed7gL0",
  authDomain: "qonaqol-555.firebaseapp.com",
  projectId: "qonaqol-555",
  storageBucket: "qonaqol-555.appspot.com",
  messagingSenderId: "1056113949934",
  appId: "1:1056113949934:web:34f9634b27b08e0e2e47ff",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
