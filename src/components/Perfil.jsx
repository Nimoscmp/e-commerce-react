import React, { useEffect, useState } from 'react'
import {auth} from '../firebase'
import { withRouter } from "react-router-dom";

const Perfil = (props) => {

    const [user, setUser] = useState(null);
    useEffect(() => {
        if(auth.currentUser){
            console.log('existe')
            setUser(auth.currentUser)
        }else{
            console.log('no existe')
            props.history.push('/')
        }
    }, [props.history])

    return (
        <div>
            <h2>Ruta Protegida</h2>
            {
                user&& (
                    <h3>{user.email}</h3>
                )
            }
        </div>
    )
}

export default withRouter(Perfil)
