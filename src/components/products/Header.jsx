import useStyles from "../../styles/Styles";
//redux
import { useDispatch, useSelector } from "react-redux";
import { select_cart_action, select_products_action } from "../../redux/header/ducks";

const Header = () => {

    const classes = useStyles();

    const { products: productsTab , cart: cartTab } = useSelector(state => state.style)
    const dispatch = useDispatch();

    return (
        <header className={classes.headerViolet}>
            <nav className={classes.w40}>
                <li className={classes.dFlexCenter}>
                    <ul 
                        className={classes.marginTwo}
                        style={{color: productsTab ? 'white' : 'inherit'}}
                        onClick={() => dispatch(select_products_action())}>Productos</ul>
                    <ul className={classes.marginTwo}
                        style={{color: cartTab ? 'white' : 'inherit'}}
                        onClick={() => dispatch(select_cart_action())}>Carrito</ul>
                    <ul className={classes.marginTwo}
                        style={{}}>Cerrar sesión</ul>
                </li>
                <div 
                    className={classes.bar}
                    style={{transform: productsTab ? 'translateX(0rem)' : 'translateX(7.35rem)'}}></div>
            </nav>
        </header>
    )
}

export default Header