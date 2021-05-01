import { makeStyles } from "@material-ui/core";

const HeaderStyles = makeStyles((theme) => ({
    /*::::::::::::::::::::: 
    :::: Header styles ::::
    :::::::::::::::::::::::*/

    //Header desktop
    //Header 
    headerViolet : {
        position: 'fixed',
        top: '0',
        zIndex: '1000',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        width: '100%',
        height: '6rem',
        backgroundColor: '#7c0362',
        boxShadow: '2px 2px 6px #dedede'
    },
    //Nav bar
    w40 : {
        width: 'auto'
    },
    //List
    dFlexCenter : {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'end',
        margin: '1.25rem 0.5rem 0.25rem',
        listStyleType: 'none',
        color: '#ccc',
        fontFamily: 'Montserrat !important'
    },
    //List item
    marginTwo : {
        margin: '1rem 1.75rem 0 !important',
        padding: '0',
        cursor: 'pointer',
        transition: 'all 0.3s ease-out',
        '&:hover' : {
            color: '#fff !important'
        }
    },
    //Mobile bar
    bar : {
        width: '6rem',
        height: '1px',
        marginStart: '4.35rem',
        backgroundColor: '#fff',
        transition: 'all 0.3s ease-out'
    },

    w80 : {
        width:' 80%'
    },
    //Title
    fw300 : {
        fontWeight: '300'
    },
    //Strong
    blue : {
        color: '#072b8f'
    },

    //Header mobile
    headerMini : {
        position: 'fixed',
        top: '0',
        zIndex: '1000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '5rem',
        padding: '0.25rem 0',
        backgroundColor: '#7c0362',
        boxShadow: '2px 2px 6px #dedede'
    },
    navMini : {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: '0.25rem 0.5rem'
    },
    headerMenu : {
        color: '#fff !important',
        cursor: 'pointer !important'
    },
    headerMenuItem : {
        fontFamily: 'Montserrat !important'
    },
    headerTitle : {
        fontFamily: 'Montserrat !important',
        fontSize: '1.3rem',
        fontWeight: '400',
        color: '#fff'
    },
}))

export default HeaderStyles