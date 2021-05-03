// import useStyles from "../styles/Styles"
import {
    FirebaseAuthProvider,
    FirebaseAuthConsumer,
    IfFirebaseAuthed,
    IfFirebaseAuthedAnd
  } from "@react-firebase/auth";
import fbConfig from "../services/firebase/fbConfig";
import firebase from "firebase/app";
import "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { update_state_user_action } from "../redux/ducks";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";

const Login = () => {

    //  Styles
    //  const classes = useStyles();

    const dispatch = useDispatch();
    const fbUser = useSelector(state => state.fbUser);

    let history = useHistory();
    
    useEffect(() => {
        // console.log(fbUser)
        if(fbUser.isSignedIn){
            history.push('/home');
        }
    }, [fbUser])

    const handleSubmit = () => {

    }

    return (
    <>  
    <FirebaseAuthProvider {...fbConfig} firebase={firebase}>
        <section>
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
            firebase.auth().signInWithPopup(facebookAuthProvider);
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
            
            const fbAuthConsumer = { isSignedIn , user , providerId };

            setTimeout(() => {
                dispatch(update_state_user_action(fbAuthConsumer));
            }, 100);

            return (
              <pre style={{ height: 300, overflow: "auto" }}>
                {JSON.stringify({ isSignedIn, user, providerId }, null, 2)}
              </pre>
            );
          }}
        </FirebaseAuthConsumer>
        </section>
    </FirebaseAuthProvider>
    </>
    )
}

export default Login
