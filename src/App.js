
import Main from "./components/Main";
import Products from "./components/Products";
import Login  from "./components/Login";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from "./components/Navbar";
import {auth} from "./firebase"
import { useEffect, useState } from "react";
import Reset from "./components/Reset";

function App() {

  const [firebaseUser, setFirebaseUser] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged(user =>{
      console.log(user)
      if(user){
        setFirebaseUser(user)
    }else{
        setFirebaseUser(null)
    }
    })
  }, [])
  return firebaseUser !== false ? (
    <Router>
        <div className="container">
       
            <Switch>
            <Route path="/" exact>
                   <Login/>     
                     
              </Route>
              <Route path="/perfil">
                  <Main />       
              </Route>
              <Route path="/reset">
                    <Reset/>       
              </Route>
                    
            </Switch>
          </div>
      

    </Router>

  ) : (
    <p>Cargando..</p>
  )
}

export default App;
