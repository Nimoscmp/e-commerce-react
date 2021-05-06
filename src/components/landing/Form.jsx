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
import { emailAndPasswordLogin, facebookLogIn, googleLogIn, registerNewUser, resetPasswordOption } from "../../helpers/authMethods";
import { FirebaseAuthConsumer } from "@react-firebase/auth";
import firebase from "firebase/app";
//  Styles
import { Button, CssBaseline, Grid, Link, Paper, TextField, Typography } from "@material-ui/core";
import Alert from '@material-ui/lab/Alert';
import FormStyles from "../../styles/FormStyles";


/*::::::::::::::::::::: 
:::::  Component  :::::
:::::::::::::::::::::::*/

const Form = () => {
    //  Styles
    const classes = FormStyles();
    //  Dispatch
    const dispatch = useDispatch();
    //  Global states
    const fbUser = useSelector(state => state.fbUser);
    const fbAuthError = useSelector(state => state.fbAuthError);
    //  Local states
    const [signUp, setSignUp] = useState(false);
    const [resetPassword, setResetPassword] = useState(false);
    const [userCredentials, setUserCredentials] = useState({
        email: '',
        password: ''
    })
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [errorGeneral, setErrorGeneral] = useState(null);
    const [successGeneral, setSuccessGeneral] = useState(null);
    const [userLocalState, setUserLocalState] = useState({
        _isSignedIn: null,
        _user: null,
        _providerId: null
    })

    //  Save username and password when writing
    const handleChange = e => {
        setUserCredentials({
            ...userCredentials,
            [e.target.name]: e.target.value
        })
    }

    // Log in validation with email and password
    const validateCredentials = async() => {

        if(resetPassword){
            if (userCredentials.email.trim() === '') {
                setErrorEmail('Debes ingresar un email');
            } else {
                setErrorEmail(null);
            }
        } else {
            if (userCredentials.email.trim() === '') {
                setErrorEmail('Debes ingresar un email');
            } else {
                setErrorEmail(null);
            }

            if (userCredentials.password.trim() === '') {
                setErrorPassword('Debes ingresar una contraseña');
            } else if (userCredentials.password.length < 6) {
                setErrorPassword('Debe tener mínimo 6 caracteres');
            } else {
                setErrorPassword(null);
            }
        }

        if (userCredentials.email.trim() !== '') {
            if(resetPassword){
                const responseMsg = await resetPasswordOption(userCredentials.email);
                dispatch(set_auth_error_msg_action(responseMsg));
                if (fbAuthError !== null) {
                    setSuccessGeneral('Revisa tu correo para restablecer tu contraseña');
                } else {
                    setSuccessGeneral(null);
                }
            }
        }
        
        if(userCredentials.email.trim() !== '' && userCredentials.password.trim() !== '' && userCredentials.password.length >= 6){
            if(signUp){
                const responseMsg = await registerNewUser(userCredentials.email, userCredentials.password);
                dispatch(set_auth_error_msg_action(responseMsg));
            } else {
                const responseMsg = await emailAndPasswordLogin(userCredentials.email, userCredentials.password);
                dispatch(set_auth_error_msg_action(responseMsg));
            }
        }
    }

    //  Error messages
    useEffect(() => {
        if(fbAuthError !== null){
            switch (fbAuthError) {
                case 'auth/user-not-found':
                    setErrorEmail('El email no es correcto');
                    break;
                case 'auth/invalid-email':
                    setErrorEmail('No es un formato de email válido');
                    break;
                case 'auth/user-disabled':
                    setErrorEmail('Lo sentimos, tu usuario fue inhabilitado');
                    break;                    
                case 'auth/email-already-in-use':
                    setErrorEmail('Este email ya está en uso');
                    break;                    
                case 'auth/wrong-password':
                    setErrorPassword('La contraseña es inválida');
                    break;                    
                case 'auth/weak-password':
                    setErrorPassword('La contraseña es débil');
                    break;                    
                case 'auth/network-request-failed':
                    setErrorGeneral('Hubo un error en la conexión');
                    break;
                case 'auth/too-many-requests':
                    setErrorGeneral('Hubo una actividad inusual, espera unos minutos e intenta de nuevo');
                    break;
                case 'auth/account-exists-with-different-credential':
                    setErrorGeneral('Ya tienes registrada esta cuenta con otras credenciales. Intenta con otra cuenta');
                    break;
                default:
                    setErrorEmail(null);
                    setErrorPassword(null);
                    setErrorGeneral(null);
                    break;
            }
        } else {

        }
        // eslint-disable-next-line
    }, [fbAuthError, errorEmail, errorPassword, errorGeneral])

    //  Routing
    let history = useHistory();
    
    useEffect(() => {
        if(fbUser.isSignedIn){
            history.push('/home');
        }
        // eslint-disable-next-line
    }, [fbUser])


    let fbAuthConsumer = {
        isSignedIn: null,
        user: null,
        providerId: null
    };

    return (
    <>
    <Grid container component="main" className={classes.root}>
        <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square >
                    <div className={classes.paper}>
                        {/*  === Title === */}
                        <Typography component="h3" variant="h5">
                        {signUp ? 'Registrarse' : resetPassword ? 'Restablecer contraseña' : 'Iniciar sesión'}
                        </Typography>
                    <div className="borde">
                        <Link 
                            href="#" 
                            variant="body2"
                            onClick={(e) => {
                            e.preventDefault();
                            signUp ? 
                            setSignUp(!signUp) 
                            :
                            setResetPassword(!resetPassword)
                            setSuccessGeneral(null);
                            }}>
                            {signUp || resetPassword ? '< Volver' : null}
                        </Link>
                        <form className={classes.form}>
                        {
                            errorGeneral !== null ? (<Alert severity="error">{errorGeneral}</Alert>) :  null
                        }

                        {
                            successGeneral !== null && resetPassword? (<Alert severity="success">{successGeneral}</Alert>) : null
                        }
                            {/*  === Email === */}
                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                autoFocus
                                autoComplete="email"
                                type="email"
                                name="email"
                                placeholder="Email"
                                onChange={handleChange}
                                // value={email}
                            />
                            {errorEmail !== null ?
                            <p className={classes.errorParagh}>{errorEmail}</p>
                            :
                            null    
                            }

                            {/*  === Password === */}
                            {resetPassword ?
                            null
                            :
                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                autoFocus
                                autoComplete="email"
                                type="password"
                                name="password"
                                placeholder="Password"
                                onChange={handleChange}
                                // value={pass}
                            />
                            }
                            {errorPassword !== null ?
                            <p className={classes.errorParagh}>{errorPassword}</p>
                            :
                            null    
                            }
                            <Grid container justify="center">
                                {/*  === Main Button === */}
                                <Button  
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="black"
                                onClick={(e) => {
                                    e.preventDefault();
                                    validateCredentials();}}
                                className={classes.submitI}>
                                    {signUp ? 'Registrarse' : resetPassword ? 'Restablecer' : 'Iniciar sesión'}
                                </Button>
                            </Grid>
                            {/* === Links === */}
                            <Grid container>
                                <Grid item>
                                    <Link href="#" variant="body2"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setSignUp(!signUp)}}>
                                        {signUp || resetPassword? null : '¿No tienes cuenta?'}
                                    </Link>
                                </Grid>
                                &nbsp;&nbsp;&nbsp;

                                <Grid item>
                                    <Link href="#" variant="body2"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setResetPassword(!resetPassword)}}>
                                        {resetPassword || signUp? null : '¿Olvidaste tu contraseña?'}
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                        
                        <div>
                            <Grid container>
                                <Grid item xs className={classes.lin}>
                                    <hr className={classes.raya}/> <div className={classes.circulo}></div> <hr className={classes.raya2}/>
                                </Grid>
                            </Grid>
                            {signUp || resetPassword ? 
                            null
                            :
                            <Grid container>
                                <Grid item>
                                    <Button  
                                    variant="contained" 
                                    size="large" 
                                    color="primary" 
                                    className={classes.btnfacebook}                 
                                    fullWidth
                                    disabled={false}
                                    onClick={() => {
                                        const loginFacebook = facebookLogIn();
                                        dispatch(set_auth_error_msg_action(loginFacebook));
                                        }}>
                                    Facebook            
                                    </Button>
                                </Grid>
                            
                                <Grid item>
                                    <Button  
                                    variant="contained" 
                                    size="large" 
                                    color="primary" 
                                    className={classes.btngoogle}                 
                                    fullWidth
                                    disabled={false}
                                    onClick={() => {
                                        const loginGoogle = googleLogIn();
                                        dispatch(set_auth_error_msg_action(loginGoogle));
                                        }}>
                                    Google            
                                    </Button>
                                </Grid>
                            </Grid>  
                            }
                        </div>
                    </div>
                </div>
            </Grid>
    </Grid>

    <FirebaseAuthConsumer>
        {({ isSignedIn, user, providerId }) => {
        
        fbAuthConsumer = { isSignedIn, user, providerId };      
        
        // firebase.auth().onAuthStateChanged(function(user) {
        //     if (user) {
        //     }
        // });
        setTimeout(() => {
            dispatch(update_state_user_action(fbAuthConsumer));
        }, 100);
        }}
    </FirebaseAuthConsumer>
    </>
    )
}

export default Form
