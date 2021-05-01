import { makeStyles } from "@material-ui/core";

const ModalStyles = makeStyles((theme) => ({
    /*::::::::::::::::::::: 
    :::: Modal styles  ::::
    :::::::::::::::::::::::*/

    dialog : {
        fontFamily: 'Montserrat !important'
    },
    modalTitle : {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#eee'
    },
    modalh2 : {
        margin: '0.4rem'
    },
    modalClose : {
        margin: '0.4rem !important',
        cursor: 'pointer !important',
        color: '#999 !important',
        transition: 'all 0.3s ease-out !important',
        '&:hover': {
            color: '#555 !important' 
        }
    },
    modalImage : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '0.25rem',
        paddingTop: '0.5rem',
        borderTop: '1px solid #bbb'
    },
    modalImg : {
        width: '55%',
        maxWidth: '245px',
        maxHeight: '315px'
    },
    modalCat : {
        margin: '0.125rem',
        color: '#777',
        textAlign: 'center'
    },
    modalDesc : {
        padding: '0.4rem'
    },
    modalParagh : {
        padding: '0.25rem',
        borderRadius: '5px',
        backgroundColor: '#eee'
    },
    modalPrice : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0.4rem'
    },
    modalPricePrev : {
        margin: '0.5rem',
        color: 'gray',
        fontSize: '1.1rem'
    },
    modalPriceCurr : {
        margin: '0.5rem',
        color: 'green',
        fontSize: '1.4rem'
    },
    modalButtons : {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '0 0.3rem 0.3rem'
    },
    modalBtnClose : {
        width: '100%',
        margin: '0.125rem !important',
        height: '2.25rem !important',
        fontFamily: 'Montserrat !important',
        textTransform: 'capitalize !important',
        color: 'gray !important',
        '&:hover' : {
            backgroundColor: 'gray !important',
            color: '#fff !important'
        }
    },
    modalBtnCart : {
        width: '100%',
        height: '2.25rem !important',
        margin: '0.125rem !important',
        fontFamily: 'Montserrat !important',
        textTransform: 'capitalize !important',
        backgroundColor: '#590447 !important',
        color: '#fff !important',
        '&:hover' : {
            backgroundColor: '#7c0362 !important',
        }
    },
}))

export default ModalStyles