/*::::::::::::::::::::: 
::::  Dependencies ::::
:::::::::::::::::::::::*/

//  React
import { useEffect, useState } from "react";
//  Redux
import { useDispatch, useSelector } from "react-redux";
import { set_auth_error_msg_action, update_state_user_action } from "../../redux/ducks";
//  Router
import { useHistory } from "react-router";
//  Firebase
import { FirebaseAuthConsumer } from "@react-firebase/auth";
import "firebase/auth";
import { emailAndPasswordLogin, facebookLogIn, googleLogIn, logOut } from "../../helpers/authMethods";
import Form from "./Form";
//  Styles
// import useStyles from "../styles/Styles"


/*::::::::::::::::::::: 
:::::  Component  :::::
:::::::::::::::::::::::*/

const Login = () => {



    // //  Dispatch
    // const dispatch = useDispatch();
    // //  Global states
    // const fbUser = useSelector(state => state.fbUser);
    // const fbAuthError = useSelector(state => state.fbAuthError);
    // //  Local states
    // const [userCredentials, setUserCredentials] = useState({
    //     email: '',
    //     password: ''
    // })
    // const [errorEmail, setErrorEmail] = useState('');
    // const [errorPassword, setErrorPassword] = useState('');
    // const [errorGeneral, setErrorGeneral] = useState('');
    // // const [userLocalState, setUserLocalState] = useState({
    // //     _isSignedIn: null,
    // //     _user: null,
    // //     _providerId: null
    // // })

    // //  Update state when changes
    // // useEffect(() => {
    // //     dispatch(update_state_user_action(userLocalState));
    // // }, [userLocalState])

    // //  Save username and password when writing
    // const handleChange = e => {
    //     setUserCredentials({
    //         ...userCredentials,
    //         [e.target.name]: e.target.value
    //     })
    // }

    // // Log in validation with email and password
    // const validateCredentials = async() => {
    //     const responseMsg = await emailAndPasswordLogin(userCredentials.email, userCredentials.password);

    //     dispatch(set_auth_error_msg_action(responseMsg));
    // }

    // //  Error messages
    // useEffect(() => {
    //     if(fbAuthError !== null){
    //         switch (fbAuthError) {
    //             case 'auth/user-not-found':
    //                 setErrorEmail('El email no es correcto');
    //                 break;
    //             case 'auth/invalid-email':
    //                 setErrorEmail('No es un formato de email válido');
    //                 break;
    //             case 'auth/user-disabled':
    //                 setErrorEmail('Lo sentimos, tu usuario fue inhabilitado');
    //                 break;                    
    //             case 'auth/wrong-password':
    //                 setErrorPassword('La contraseña es inválida');
    //                 break;                    
    //             case 'auth/network-request-failed':
    //                 setErrorGeneral('Hubo un error en la conexión');
    //                 break;
    //             case 'auth/too-many-requests':
    //                 setErrorGeneral('Hubo una actividad inusual, espera unos minutos e intenta de nuevo');
    //                 break;
    //             default:
    //                 setErrorEmail('');
    //                 setErrorPassword('');
    //                 setErrorGeneral('');
    //                 break;
    //         }
    //     } else {

    //     }
    //     // eslint-disable-next-line
    // }, [fbAuthError])

    // //  Routing
    // let history = useHistory();
    
    // useEffect(() => {
    //     if(fbUser.isSignedIn){
    //         history.push('/home');
    //     }
    //     // eslint-disable-next-line
    // }, [fbUser])

    return (
    <>  
    {/* <section>
        <label htmlFor="email">Email</label>
        <input 
            type="email"
            name="email"
            onChange={handleChange}/>
        <p>{errorEmail}</p>    

        <label htmlFor="password">Contraseña</label>
        <input 
            type="password"
            name="password"
            onChange={handleChange}/>
        <p>{errorPassword}</p>

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
            let fbAuthConsumer = { isSignedIn, user, providerId };
            setTimeout(() => {
                dispatch(update_state_user_action(fbAuthConsumer));
            }, 200);
            

            return (
              <pre style={{ height: 300, overflow: "auto" }}>
                {JSON.stringify({ isSignedIn, user, providerId }, null, 2)}
              </pre>
            );
          }}
        </FirebaseAuthConsumer>
    </section> */}

    <Form />
    </>
    )
}

export default Login
