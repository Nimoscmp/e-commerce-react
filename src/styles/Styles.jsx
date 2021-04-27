import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    /*::::::::::::::::::::: 
    ::: General styles  :::
    :::::::::::::::::::::::*/

    marginOne: {
        marginTop: '0.5rem !important',
        marginBottom: '0.5rem !important'
    },

    /*::::::::::::::::::::: 
    :::: Header styles ::::
    :::::::::::::::::::::::*/

    //Header 
    headerViolet : {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        width: '100%',
        height: '6rem',
        backgroundColor: '#7c0362'
    },
    //Nav bar
    w40 : {
        width: 'auto'
    },
    //List
    dFlexCenter : {
        display: 'flex',
        justifyContent: 'around',
        alignItems: 'end',
        listStyleType: 'none',
        color: '#ccc'
    },
    //List item
    marginTwo : {
        margin: '2.25rem 1.75rem 0.25rem !important',
        padding: '0',
        cursor: 'pointer'
    },
    //Mobile bar
    bar : {
        width: '5rem',
        height: '1px',
        marginStart: '1.45rem',
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

    /*::::::::::::::::::::: 
    ::::  Form styles  ::::
    :::::::::::::::::::::::*/

    //  Form general
    flexColumn: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '80%',
        padding: theme.spacing(1)
    },

    //  Icons
    iconBlue: {
        color: '#002884',
        transition: 'all 0.3s ease-out'
    },
    iconGray: {
        color: '#6e6e6e',
        transition: 'all 0.3s ease-out'
    },
    //  Forgot password
    orange : {
        color: '#f79b11',
        cursor: 'pointer',
        display: 'inline-block',
        width: '50%',
        paddingLeft: '0.8725rem'
    }

}));

export default useStyles;