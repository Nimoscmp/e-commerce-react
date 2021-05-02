import app from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'
import fbConfig from './fbConfig';


var firebaseConfig = {
    apiKey: fbConfig.apiKey,
    authDomain: fbConfig.authDomain,
    projectId: fbConfig.projectId,
    storageBucket: fbConfig.storageBucket,
    messagingSenderId: fbConfig.messagingSenderId,
    appId: fbConfig.appId
  };
  // Initialize Firebase
  app.initializeApp(firebaseConfig);

  const dataBase = app.firestore();
  const auth = app.auth();

  export {dataBase, auth, app}