import firebase from "firebase/app";
import "firebase/auth";

export const emailAndPasswordLogin = async(email , password) => {
    let errorCode = null;

    try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
        console.log(error);
        errorCode = error.code;
    }

    return errorCode;
}

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
