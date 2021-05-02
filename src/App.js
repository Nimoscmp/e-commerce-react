import { Provider } from "react-redux";
import { BrowserRouter as Router, Link, Redirect, Route, Switch } from 'react-router-dom';
import generateStore from "./redux/store";
import { useEffect, useState } from "react";
import Login from "./components/Login";
import Main from "./components/Main";
import Reset from "./components/Reset";
// import { auth } from "./services/firebase/firebase";
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
  IfFirebaseAuthed,
  IfFirebaseAuthedAnd
} from "@react-firebase/auth";
import fbConfig from "./services/firebase/fbConfig";
import firebase from "firebase/app";
import "firebase/auth";



function App() {

  const store = generateStore();

  // const [firebaseUser, setFirebaseUser] = useState(null);

  // useEffect(() => {
  //   auth.onAuthStateChanged(user =>{
  //     console.log(user)
  //     if(user){
  //       setFirebaseUser(user)
  //     } else{
  //       setFirebaseUser(null)
  //     }
  //   })
  // }, [])

  return (
    <>
    <FirebaseAuthProvider {...fbConfig} firebase={firebase}>

      <Provider
        store={store}>

        <button
          onClick={() => {
            const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(googleAuthProvider);
          }}
        >
          Sign In with Google
        </button>

        <button
          onClick={() => {
            const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
            firebase.auth().signInWithPopup(facebookAuthProvider).then(function(result) {
              // This gives you a Facebook Access Token.
              var token = result.credential.accessToken;
              // The signed-in user info.
              var user = result.user;
            });
          }}
        >
          Sign In with Facebook
        </button>

        <button
          onClick={() => {
            firebase.auth().signOut();
          }}
        >
          Sign Out
        </button>

        <FirebaseAuthConsumer>
          {({ isSignedIn, user, providerId }) => {
            console.log(isSignedIn);
            return (
              <pre style={{ height: 300, overflow: "auto" }}>
                {JSON.stringify({ isSignedIn, user, providerId }, null, 2)}
              </pre>
            );
          }}
        </FirebaseAuthConsumer>

        <Router>
        {/* //Navigation provisory */}
          <nav style={{marginTop: '6rem'}}>
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/reset">Reset</Link>
              </li>
            </ul>
          </nav>

          <Switch>

            <Redirect exact from="/" to="/login"/>

            {/* Login route */}
            <Route path="/login">
              <Login/>
            </Route>
            {/* Home route  */}
            <Route path="/home">
              <Main/>
            </Route>
            {/* Reset route  */}
            <Route path="/reset">
              <Reset/>
            </Route> 

          </Switch>



        </Router>
      </Provider>
    </FirebaseAuthProvider>
    </>
  );
}

export default App;
