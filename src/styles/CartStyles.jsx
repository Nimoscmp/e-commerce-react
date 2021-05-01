import { makeStyles } from "@material-ui/core";

const CartStyles = makeStyles((theme) => ({
    /*::::::::::::::::::::: 
    ::::: Cart styles :::::
    :::::::::::::::::::::::*/

    cartBox : {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: '6rem',
        padding: '1rem',
        fontFamily: 'Montserrat'
    },
    cartDiv : {
        position: 'relative',
        display: 'flex',
        width: '60%',
        height: '12rem',
        margin: '0.75rem',
        boxShadow: '2px 2px 8px #efefef',
        borderRadius: '0.5rem',
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        '&:hover' : {
            transform: 'scale(1.007)',
            transformOrigin: '50% 50%',
            boxShadow: '3px 3px 15px #e0e0e0'
        }
    },
    cartDelete : {
        position: 'absolute',
        top: '0.5rem',
        right: '0.5rem',
        cursor: 'pointer',
        color: '#aaa',
        transition: 'all 0.3s ease-out',
        '&:hover' : {
            color: '#777'
        }
    },
    cartText : {
        width: '70%',
        padding: '0.5rem',
        position: 'relative'
    },
    cartTitle : {
        color: '#9c9297',
        fontWeight: '400',
        padding: '0 0.5rem'
    },
    cartPrice : {
        padding: '0 0.5rem'    
    },
    cartImage : {
        display: 'flex',
        alignItems: 'center',
        width: '30%',
        padding: '0.5rem'
    },
    cartImageMini : {
        position: 'absolute',
        bottom: '0.5rem',
        right: '0.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40%',
        padding: '0'
    },
    cartImgBig : {
        width: '50%',
        maxHeight: '180px',
        maxWidth: '140px'
    },
    cartImg : {
        width: '60%',
        maxHeight: '180px',
        maxWidth: '140px'
    },
    cartImgMini : {
        width: '80%',
        maxWidth: '100px',
        maxHeight: '140px'
    },
    cartMoreLess : {
        display: 'flex',
        margin: '1rem 0 0 0',
        borderRadius: '10px',
        position: 'absolute',
        bottom: '0.5rem',
        left: '0.5rem'
    },
    cartLess : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '40px',
        height: '40px',
        padding: '0',
        backgroundColor: '#d99ab9',
        borderRadius: '10px 0 0 10px'
    },
    cartNumber : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '40px',
        height: '40px',
        padding: '0',
        backgroundColor: '#f2ebef'
    },
    cartMore : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '40px',
        height: '40px',
        padding: '0',
        backgroundColor: '#d99ab9',
        borderRadius: ' 0 10px 10px 0'
    },
    cartAdd : {
        color: '#fff',
        margin : '0',
        cursor: 'pointer',
        opacity: '0.75',
        transition: 'all 0.3s ease-in-out',
        '&:hover' : {
            opacity: '1'
        }
    },
    cartPay : {
        width: '60%',
        color: '#7c0362 !important',
        margin: '0.25rem',
        borderColor: '#7c0362 !important',
        textTransform: 'capitalize !important',
        fontFamily: 'Montserrat !important',
        '&:hover' : {
            backgroundColor: '#7c0362 !important',
            color: '#fff !important'
        }
    },
    cartTotalPrice : {
        margin: '0 1rem'
    },
    cartEmpty : {
        padding: '0.25rem'
    },
}))

export default CartStyles