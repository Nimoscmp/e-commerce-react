/*::::::::::::::::::::: 
::::  Dependencies ::::
:::::::::::::::::::::::*/

//  React
import { useEffect, useState } from "react";
//  Redux
import { Provider, useSelector } from "react-redux";
import generateStore from "./redux/store";
//  Router
import { BrowserRouter as Router, Link, Redirect, Route, Switch } from 'react-router-dom';
//  Firebase
import fbConfig from "./services/firebase/fbConfig";
import firebase from "firebase/app";
import { FirebaseAuthProvider } from "@react-firebase/auth";
//  Components
import Main from "./components/Main";
import Landing from "./components/Landing";
// import { auth } from "./services/firebase/firebase";
// import {
//   FirebaseAuthProvider,
//   FirebaseAuthConsumer,
//   IfFirebaseAuthed,
//   IfFirebaseAuthedAnd
// } from "@react-firebase/auth";
// import fbConfig from "./services/firebase/fbConfig";
// import firebase from "firebase/app";
// import "firebase/auth";

/*::::::::::::::::::::: 
:::::  Component  :::::
:::::::::::::::::::::::*/

function App() {

  const store = generateStore();

  return (
    <>
    <FirebaseAuthProvider {...fbConfig} firebase={firebase}>
      <Provider
        store={store}>

        <Router>
        {/* //Navigation provisory */}
          {/* <nav style={{marginTop: '6rem'}}>
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
          </nav> */}

          <Switch>

            <Redirect exact from="/" to="/login"/>

            {/* Login route */}
            <Route path="/login">
              <Landing/>
            </Route>
            {/* Home route  */}
            <Route path="/home">
              <Main/>
            </Route>
            
            <Redirect to="/"/> 

          </Switch>

        </Router>
      </Provider>
    </FirebaseAuthProvider>
    </>
  );
}

export default App;
