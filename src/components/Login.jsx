// import useStyles from "../styles/Styles"
import { FirebaseAuthConsumer } from "@react-firebase/auth";
import "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { set_auth_error_msg_action, update_state_user_action } from "../redux/ducks";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { emailAndPasswordLogin, facebookLogIn, googleLogIn, logOut } from "../helpers/authMethods";

const Login = () => {
    //  Dispatch
    const dispatch = useDispatch();
    //  Global states
    const fbUser = useSelector(state => state.fbUser);
    const fbAuthError = useSelector(state => state.fbAuthError);
    //  Local states
    const [userCredentials, setUserCredentials] = useState({
        email: '',
        password: ''
    })
    const [errorToShow, setErrorToShow] = useState('');

    //  Save username and password when writing
    const handleChange = e => {
        setUserCredentials({
            ...userCredentials,
            [e.target.name]: e.target.value
        })
    }

    // Log in validation with email and password
    const validateCredentials = async() => {
        const responseMsg = await emailAndPasswordLogin(userCredentials.email, userCredentials.password);

        dispatch(set_auth_error_msg_action(responseMsg));
    }

    useEffect(() => {
        if(fbAuthError !== null){
            switch (fbAuthError) {
                case 'auth/wrong-password':
                    setErrorToShow('La contraseña es inválida');
                    break;
                case 'auth/user-not-found':
                    setErrorToShow('El email no es correcto');
                    break;
                case 'auth/invalid-email':
                    setErrorToShow('No es un formato de email válido');
                    break;
                case 'auth/network-request-failed':
                    setErrorToShow('Hubo un error en la conexión');
                    break;
                case 'auth/too-many-requests':
                    setErrorToShow('Hubo una actividad inusual, espera unos minutos e intenta de nuevo');
                    break;
                case 'auth/user-disabled':
                    setErrorToShow('Lo sentimos, tu usuario fue inhabilitado');
                    break;
                default:
                    setErrorToShow('');
                    break;
            }
        } else {

        }
        // eslint-disable-next-line
    }, [fbAuthError])

    //  Routing
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
        <label htmlFor="email">Ingrese Email</label>
        <input 
            type="email"
            name="email"
            onChange={handleChange}/>
        <p>{errorToShow}</p>    

        <label htmlFor="password">Contraseña</label>
        <input 
            type="password"
            name="password"
            onChange={handleChange}/>
        <p>Texto incorrecto</p>

        <button
          onClick={() => validateCredentials()}>
          Sign In 
        </button>

        <button
          onClick={() => googleLogIn()}>
          Sign In with Google
        </button>

        <button
          onClick={() => facebookLogIn()}>
          Sign In with Facebook
        </button>

        <button
          onClick={() => logOut()}>
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
