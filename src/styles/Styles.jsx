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
        cursor: 'pointer',
        transition: 'all 0.3s ease-out'
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
    ::: Product styles ::::
    :::::::::::::::::::::::*/

    //Products general
    productBox : {
        display: 'flex',
        flexWrap: 'wrap',
        padding: '0.5rem'
    },

    //Card
    card : {
        display: 'flex',
        flexWrap: 'wrap',
        maxWidth: '20rem',
        fontFamily: 'Montserrat, sans-serif',
        boxShadow: '2px 2px 8px #efefef',
        borderRadius: '0.5rem',
        margin: '0.5rem',
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        '&:hover' : {
            transform: 'scale(1.007)',
            transformOrigin: '50% 50%',
            boxShadow: '3px 3px 15px #e0e0e0'
        }
    },
    cardHeader : {
        width: '100%',
        display: 'block',
        justifyContent: 'space-between',
        alignItems: 'center',
        '&::after' : {
            content: '""',
            display: 'block',
            width: '10rem',
            height: '1px',
            backgroundColor: '#b88423',
            margin:' 1rem auto 1rem'
        }
    },
    cardTitle : {
        display: 'inline-block',
        width: '80%',
        color: '#555',
        margin: '0.5rem !important'
    },
    cardFav : {
        marginLeft: '0.5rem',
        color: '#198754'
    },
    cardLine : {
        width: '90%'
    },
    cardPrice : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        margin: '0.25rem 0'
    },
    cardPricePrev : {
        color: '#888',
        margin: '0 0.5rem'
    },
    cardPriceCurr : {
        color : '#198754',
        margin: '0 0.5rem'
    },
    cardImage: {
        display: 'flex',
        justifyContent: 'center'
    },
    cardImg : {
        width: '60%'
    },
    cardRate : {
        color: '#e69e10'
    },
    cardButtons : {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '100%',
        padding: '0.25rem'
    },
    cardBtnDetail : {
        width: '80%',
        margin: '0.125rem',
        height: '2.25rem',
        textTransform: 'capitalize',
        color: 'gray',
        '&:hover' : {
            backgroundColor: 'gray',
            color: '#fff'
        }
    },
    cardBtnCart : {
        width: '80%',
        height: '2.25rem',
        margin: '0.125rem',
        textTransform: 'capitalize',
        backgroundColor: '#590447',
        color: '#fff',
        '&:hover' : {
            backgroundColor: '#7c0362',
        }
    },


}));

export default useStyles;