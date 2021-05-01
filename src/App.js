import { Provider } from "react-redux";
import { BrowserRouter as Router, Link, Redirect, Route, Switch } from 'react-router-dom';
import generateStore from "./redux/store";
import Login from "./components/Login";
import Main from "./components/Main";
import Reset from "./components/Reset";

function App() {

  const store = generateStore();

  return (
    <>
      <Provider
        store={store}>

        <Router>

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

          <Main />

        </Router>
      </Provider>
    </>
  );
}

export default App;
