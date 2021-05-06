import { makeStyles } from "@material-ui/core";

const FormStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
    },
    image2: {
      backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    image: {
      backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
      
    },
    submitI: {
      margin: theme.spacing(3, 0, 2),
      borderRadius: 30,
      width: '20rem', 
      height: '3rem',
      color: '#fff',
      background: '#7c0362'
      
      
    },
  
    btngoogle: {
      margin: theme.spacing(1),
      borderRadius: 30,
      width: '8rem', 
      height: '3rem',
      color: '#fff',
      background: 'red'
    },
    btnfacebook: {
      margin: theme.spacing(1),
      borderRadius: 30,
      width: '8rem', 
      height: '3rem'
    },

    //////
    raya : {
        width: '80%',
        margin: '5px 0 ',
        background: '#acacac'
    },    
    circulo : {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        background: '#acacac'
    },
    lin : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        margin: '2rem 0',
        position: 'relative'
    },
    errorParagh : {
        color: '#c49621',
        margin: '0.125rem'   
    }
  }));

  export default FormStyles