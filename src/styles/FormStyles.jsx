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
        float: 'left',
        width: '6vw',
        marginTop: '23px',
        background: '#acacac'
    },
    raya2 : {
        float : 'right',
        width: '6vw',
        margin: '23px 0',
        background: '#acacac'
    },    
    circulo : {
        float: 'left',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        background: '#acacac'
    },
    lin : {
        width: '50%',
        marginTop: '10px',
        marginBottom: '10px'
    },
    errorParagh : {
        color: '#c49621',
        margin: '0.125rem'   
    }
  }));

  export default FormStyles