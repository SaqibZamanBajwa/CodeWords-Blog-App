import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAo_W5hXqv30ZxYt0v5xyvpGCHJPrRo0LQ",
  authDomain: "codewords-blog-app.firebaseapp.com",
  projectId: "codewords-blog-app",
  storageBucket: "codewords-blog-app.appspot.com",
  messagingSenderId: "838606890406",
  appId: "1:838606890406:web:6635e840c0e098f03b1b67",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
