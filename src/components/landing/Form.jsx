import { Button, CssBaseline, Grid, Link, Paper, TextField, Typography } from "@material-ui/core";
import FormStyles from "../../styles/FormStyles";

const Form = () => {

    const classes = FormStyles();

    return (
    <>
    <Grid container component="main" className={classes.root}>
        <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square >
                    <div className={classes.paper}>
                        <Typography component="h1" variant="h5">
                        {
                            'Registrarse'
                        }
                        </Typography>
                    <div className={classes.borde}>
                        <form className={classes.form}>
                        {
                            // error ? (<Alert severity="error">{error}</Alert>) : null
                        }
                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                autoFocus
                                autoComplete="email"
                                type="email"
                                name="email"
                                placeholder="Email"
                                // value={email}
                            />

                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                autoFocus
                                autoComplete="email"
                                type="password"
                                name="password"
                                placeholder="Password"
                                // value={pass}
                            />
                            <Grid container justify="center">
                                <Button  
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="black"
                                className={classes.submitI}
                                >{'Registrarse'}
                                </Button>
                            </Grid>
                            <Grid container>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {'¿No tienes cuenta?'}
                                    </Link>
                                </Grid>
                                &nbsp;&nbsp;&nbsp;

                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {"Recuperar Contaseña"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                        
                        <div>
                            <Grid container>
                                <Grid item xs className={classes.lin}>
                                    <hr className={classes.raya}/> <div className={classes.circulo}></div> <hr className={classes.raya2}/>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item>
                                    <Button  
                                    variant="contained" 
                                    size="large" 
                                    color="primary" 
                                    className={classes.btnfacebook}                 
                                    fullWidth
                                    disabled={false}
                                    >
                                    facebook            
                                    </Button>
                                </Grid>
                            
                                <Grid item>
                                    <Button  
                                    variant="contained" 
                                    size="large" 
                                    color="primary" 
                                    className={classes.btngoogle}                 
                                    fullWidth
                                    disabled={false}
                                    >
                                    google            
                                    </Button>
                                </Grid>
                            </Grid>  
                        </div>
                    </div>
                </div>
          </Grid>
    </Grid>
    </>
    )
}

export default Form
