/*::::::::::::::::::::: 
::::  Dependencies ::::
:::::::::::::::::::::::*/

//  Router
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
//  Firebase
import fbConfig from "./services/firebase/fbConfig";
import firebase from "firebase/app";
import { FirebaseAuthProvider } from "@react-firebase/auth";
//  Components
import Main from "./components/Main";
import Landing from "./components/Landing";

/*::::::::::::::::::::: 
:::::  Component  :::::
:::::::::::::::::::::::*/

function SubApp() { 
             
  return (
    <>
    <FirebaseAuthProvider {...fbConfig} firebase={firebase}>
        <Router>
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
            
          </Switch>
        </Router>
    </FirebaseAuthProvider>
    </>
  );
}

export default SubApp;