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

    /*::::::::::::::::::::: 
    ::: Product styles ::::
    :::::::::::::::::::::::*/

    //Search styles
    searchBox : {
        display: 'flex',
        flexWrap: 'wrap',
        margin: '6rem 0 0.5rem',
        padding: '0.5rem 1rem',
        position: 'relative'
    },
    searchSelect : {
        '& label.Mui-focused': {
            color: '#c49621'
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#c49621'
        },
        fontFamily: 'Montserrat !important' 
    },
    searchMenuItem : {
        fontFamily: 'Montserrat !important'
    },

    //Products general
    productBox : {
        display: 'flex',
        flexWrap: 'wrap',
        padding: '0.5rem',
        position: 'relative'
    },

    //Card
    card : {
        display: 'flex',
        position: 'relative',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        maxWidth: '20rem',
        // height: '40rem',
        fontFamily: 'Montserrat, sans-serif',
        boxShadow: '2px 2px 8px #e2e2e2',
        borderRadius: '0.5rem',
        margin: '0.5rem',
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        '&:hover' : {
            transform: 'scale(1.007)',
            transformOrigin: '50% 50%',
            boxShadow: '3px 3px 15px #dcdcdc'
        }
    },
    cardHeader : {
        width: '100%',
        height: '4rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative'
    },
    cardHeaderWrap : {
        width: '100%',
        height: '5rem',
        '&::after' : {
            content: '""',
            display: 'block',
            width: '10rem',
            height: '2px',
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
        position: 'absolute',
        top: '0.5rem',
        right: '0.5rem',
        marginLeft: '0.5rem',
        color: '#198754'
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
        justifyContent: 'center',
        margin: '0.25rem 0'
    },
    cardImg : {
        width: '60%',
        maxHeight: '270px'
    },
    cardRate : {
        color: '#e69e10',
        marginBottom: '6rem'
    },
    cardButtons : {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '100%',
        padding: '0.25rem',
        position: 'absolute',
        bottom: '0.25rem'
    },
    cardBtnDetail : {
        width: '80%',
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
    cardBtnCart : {
        width: '80%',
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
        cursor: 'pointer'
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
        width: '80%',
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
        width: '80%',
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

    /*::::::::::::::::::::: 
    ::: loading styles  :::
    :::::::::::::::::::::::*/
    mainLoad : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '70vh',
        width: '100%'
    },
    spanLoad : {
        // color: '#e91e63',
        color: '#7c0362',
        fontSize: '1.5rem',
        margin: '0.125rem'
    },
    progressLoad : {
        color: '#7c0362 !important',
        margin: '0.125rem'
    }

}));

export default useStyles;