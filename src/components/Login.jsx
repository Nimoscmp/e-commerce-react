// import useStyles from "../styles/Styles"
import { FirebaseAuthConsumer } from "@react-firebase/auth";
import "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { update_state_user_action } from "../redux/ducks";
import { useEffect } from "react";
import { useHistory } from "react-router";
import { facebookLogIn, googleLogIn, logOut } from "../helpers/authMethods";

const Login = () => {

    const dispatch = useDispatch();
    const fbUser = useSelector(state => state.fbUser);

    let history = useHistory();
    
    useEffect(() => {
        if(fbUser.isSignedIn){
            history.push('/home');
        }
        // eslint-disable-next-line
    }, [fbUser])

    return (
    <>  
        <section>
        <button
          onClick={() => googleLogIn()}
        >
          Sign In with Google
        </button>

        <button
          onClick={() => facebookLogIn()}
        >
          Sign In with Facebook
        </button>

        <button
          onClick={() => logOut()}
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
    </>
    )
}

export default Login
