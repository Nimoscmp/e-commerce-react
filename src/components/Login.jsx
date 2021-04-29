import { useState } from "react";
import Alert from '@material-ui/lab/Alert';
import {auth, db} from '../firebase'
import { useCallback } from "react";
import { withRouter } from "react-router-dom";
import {useDispatch} from 'react-redux'
import {ingresoUsuarioAccion} from '../redux/usuarioDucks'


const Login = (props) => {

  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState(null);
  const [esRegistro, setEsRegistro] = useState(false);

  const handleSubmit = e =>{
    e.preventDefault()
    if(!email.trim()){
      setError('Ingrese Email')
      return
    }
    if(!pass.trim()){
      setError('Ingrese Contraseña')
      return
    }
    if(pass.length < 6){
      setError('Contraseña menor a 6 caracteres')
      return
    }
    setError(null);
    
    if(esRegistro){
      registrar()
     
    }else{
      login()  
    }
  }

  const login = useCallback(
    async() => {
      
      try {
        const res = await auth.signInWithEmailAndPassword(email, pass);
        console.log(res);
        setEmail('');
        setPass('');
        setError(null);
        props.history.push('/perfil');
      } catch (error) {
        console.log(error);
        if(error.code === 'auth/user-not-found'){
          setError('Usuario o contraseña incorrecta')
        }
        if(error.code === 'auth/wrong-password'){
          setError('contraseña incorrecta')
        }
      }
    },
    [email, pass, props.history],
  )

  const registrar = useCallback(
    async() => {
      try {
       const res = await auth.createUserWithEmailAndPassword(email, pass);
       console.log(res.user)
       setEmail('');
       setPass('');
       setError(null);
       props.history.push('/perfil');
       await db.collection('usuarios').doc(res.user.email).set({
                 // fechaCreacion: Date.now(),
                  //displayName: res.user.displayName,
                  //photoURL: res.user.photoURL,
                  email: res.user.email,
                  uid: res.user.uid
       })
      

      } catch (error) {
        console.log(error)
        if(error.code === 'auth/invalid-email'){
          setError('Email no válido')
          return
        }
        if(error.code === 'auth/email-already-in-use'){
          setError('Usuario ya registrado...')
          return
        }
      }
      
    },[email, pass, props.history])

    return (  
        <div>
          <h3>
            {
              esRegistro ? 'Registrarse' : 'Iniciar sesión'
            }
          </h3>
        <form onSubmit={handleSubmit}>
          {
            error ? (<Alert severity="error">{error}</Alert>) : null
          }
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}
            value={email}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={e => setPass(e.target.value)}
            value={pass}
          />
          
          <button 
          type="submit">
            { esRegistro ? 'Registrarse' : 'Inicicar sesión' }
          </button>
          <button 
              type="button"
              onClick={() => setEsRegistro(!esRegistro)}
          
          >
            {
              esRegistro ? '¿Ya esta registrado?' : '¿No tienes cuenta?'
            }
            
          </button>
         
          {
            !esRegistro ?(
              <button
                type = "button"
                onClick={() => props.history.push('/reset')}
              >
                Recuperar Contaseña
              </button>
            ) : null
          }

          
        </form>
        <div>
          <h3>.......</h3>
          <hr/>
        <button
            onClick = {() => dispatch(ingresoUsuarioAccion())}
          >
            google            
          </button>
          </div>
      </div>
    );
}
 
export default withRouter(Login);



