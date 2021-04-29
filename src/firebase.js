import app from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/analytics'


var firebaseConfig = {
    apiKey: "AIzaSyDzqfvXJZSjRlrSeQoZPLkJXKyBT6nlvNY",
    authDomain: "e-commerce-3a8d0.firebaseapp.com",
    projectId: "e-commerce-3a8d0",
    storageBucket: "e-commerce-3a8d0.appspot.com",
    messagingSenderId: "907162760772",
    appId: "1:907162760772:web:7c726b797304bca78e6e11",
    measurementId: "G-98Y1JZHKQD"
  };
  // Initialize Firebase
  app.initializeApp(firebaseConfig);
  app.analytics();

  const db = app.firestore();
  const auth = app.auth();

  export {db, auth, app}