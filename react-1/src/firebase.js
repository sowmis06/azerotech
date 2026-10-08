import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {

    apiKey: "AIzaSyADrWhCA29sGNzeRBnsIsFUoBtXIruYRUA",
  authDomain: "movie-explorer-9d6aa.firebaseapp.com",
  projectId: "movie-explorer-9d6aa",
  storageBucket: "movie-explorer-9d6aa.firebasestorage.app",
  messagingSenderId: "609489622022",
  appId: "1:609489622022:web:c5bcad1dddb568ce7ddf87",
  measurementId: "G-0JHCHC2SE9"
  
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);