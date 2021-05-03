import firebase from "firebase/app";
import "firebase/auth";

export const googleLogIn = () => {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleAuthProvider);
}

export const facebookLogIn = () => {
    const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(facebookAuthProvider);
}

export const logOut = () => {
    firebase.auth().signOut();
}
