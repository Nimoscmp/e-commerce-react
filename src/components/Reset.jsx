import React, { useCallback, useState } from 'react'
import {auth} from '../firebase'
import Alert from '@material-ui/lab/Alert';
import { withRouter } from "react-router-dom";

const Reset = (props) => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = e =>{
        e.preventDefault()
        if(!email.trim()){
          setError('Ingrese Email')
          return
        }
       
        setError(null);

        recuperar()
      }

      const recuperar = useCallback(async()=>{
          try {
            await auth.sendPasswordResetEmail(email)
            props.history.push('/')
          } catch (error) {
              console.log(error.message)
          }

      }, [email, props.history])

      
    return (
        <div>
          <h3>
            Recuperar Contraseña
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

          
          
          <button 
          type="submit">
           Reiniciar Contraseña
          </button>
          
        </form>
      </div>
    )
}

export default withRouter(Reset)
