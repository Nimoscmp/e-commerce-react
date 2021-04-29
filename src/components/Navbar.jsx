import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import {auth} from '../firebase'
import {withRouter} from "react-router-dom"

const Navbar = (props) => {
     const cerrarSesion = () => {
            auth.signOut()
            .then(() =>{
                props.history.push('/login')
            })
     }
    return (
        <div>
            <Link to="/">e-commerce</Link>
            <div>
                <div>
                    <NavLink to="/" exact>
                        Productos
                    </NavLink>
                    {
                        props.firebaseUser !== null ? (
                            <NavLink to="/perfil">
                                perfil
                            </NavLink>
                        ) : null
                    }
                    
                    {
                        props.firebaseUser !== null ? (
                            <button
                                onClick={() => cerrarSesion()}
                            >
                                Cerrar Sesión
                                </button>
                        ) : (
                            <NavLink to="/login">
                                login
                            </NavLink>
                        )
                    }
                    
                </div>

            </div>
            
        </div>
    )
}

export default withRouter(Navbar);
