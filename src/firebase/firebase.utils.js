import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";




  const firebaseConfig = {
    apiKey: "AIzaSyDBPG-1sBb8So8iI25n3wilCjJ8p3mSlec",
    authDomain: "fhijabs.firebaseapp.com",
    projectId: "fhijabs",
    storageBucket: "fhijabs.appspot.com",
    messagingSenderId: "827141308764",
    appId: "1:827141308764:web:179469f3318d0c5d5cc199",
    measurementId: "G-XRS57M7H6H"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);








