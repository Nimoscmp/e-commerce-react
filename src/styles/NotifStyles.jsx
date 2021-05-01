import { makeStyles } from "@material-ui/core";

const NotifStyles = makeStyles((theme) => ({
    /*::::::::::::::::::::: 
    ::Notification styles::
    :::::::::::::::::::::::*/

    notiDiv : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        zIndex: '1001',
        bottom: '1rem',
        left: '1rem',
        height: '5rem',
        borderRadius: '10px',
        boxShadow: '2px 2px 8px #ccc',
        backgroundColor: '#567a56',
        color: '#fff',
        transition: 'all 0.3s ease-in-out'
    },
    notiText : {
        fontFamily: 'Montserrat',
        fontWeight: '400',
        fontSize: '1rem',
        margin: '0.5rem 0.5rem 0.5rem 1rem'
    },
    notiIcon : {
        margin: '0.5rem 1rem 0.5rem 0.25rem !important'
    },
}))

export default NotifStyles