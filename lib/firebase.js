import { initializeApp } from "firebase/app";
//TODO: Add SDKs for Firebase products that you want to use
// Your web app's Firebase configuration

import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBaIP0n92X-3grTZ8OzbCsYNaDsS3OUCug",
  authDomain: "myprogress-c6584.firebaseapp.com",
  projectId: "myprogress-c6584",
  storageBucket: "myprogress-c6584.appspot.com",
  messagingSenderId: "514370742910",
  appId: "1:514370742910:web:0a764d3cff9c5ad38b862f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
export { db };
