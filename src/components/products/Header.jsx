import useStyles from "../../styles/Styles";

const Header = () => {

    const classes = useStyles();

    return (
        <header className={classes.headerViolet}>
            <nav className={classes.w40}>
                <li className={classes.dFlexCenter}>
                    <ul 
                        className={classes.marginTwo}
                        style={{color: 'white'}}>Productos</ul>
                    <ul className={classes.marginTwo}
                        style={{}}>Carrito</ul>
                    <ul className={classes.marginTwo}
                        style={{}}>Cerrar sesión</ul>
                </li>
                <div 
                    className={classes.bar}
                    style={{transform: 'translateX(7.35rem)'}}></div>
            </nav>
        </header>
    )
}

export default Header