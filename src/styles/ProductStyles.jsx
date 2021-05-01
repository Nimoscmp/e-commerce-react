import { makeStyles } from "@material-ui/core";

const ProductStyles = makeStyles((theme) => ({
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
        '& .MuiSelect-root , .MuiFormHelperText-root, label, select': {
            fontFamily: 'Montserrat !important'
        }
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
    cardImgMini : {
        width: '37%',
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
}))

export default ProductStyles