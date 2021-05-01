import useStyles from "../../styles/Styles";
import { select_cart_action, select_products_action } from "../../redux/ducks";
import { Fade, Menu, MenuItem, useMediaQuery } from "@material-ui/core";
//redux
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { ArrowBackRounded, MenuRounded, ShoppingCartOutlined } from "@material-ui/icons";

const Header = () => {
    //  Styles
    const classes = useStyles();
    const matches_720 = useMediaQuery('(min-width:720px)');
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    //  Dispatch
    const dispatch = useDispatch();
    //  Global states
    const { products: productsTab , cart: cartTab } = useSelector(state => state.style)
    
    //  Mobile header actions
    const productsClick = () => {
        handleClose();
        dispatch(select_products_action());
    }
    const cartClick = () => {
        handleClose();
        dispatch(select_cart_action());
    }
    const logOutClick = () => {
        handleClose();
    }


    return (
        <>
        {matches_720 ?
        <header className={classes.headerViolet}>
            <nav className={classes.w40}>
                <ul className={classes.dFlexCenter}>
                    <li 
                        className={classes.marginTwo}
                        style={{color: productsTab ? 'white' : 'inherit'}}
                        onClick={() => dispatch(select_products_action())}>Productos</li>
                    <li className={classes.marginTwo}
                        style={{color: cartTab ? 'white' : 'inherit'}}
                        onClick={() => dispatch(select_cart_action())}>Carrito</li>
                    <li className={classes.marginTwo}
                        style={{}}>Cerrar sesión</li>
                </ul>
                <div 
                    className={classes.bar}
                    style={{transform: productsTab ? 'translateX(0rem)' : 'translateX(7.75rem)'}}></div>
            </nav>
        </header>   
        
        :
          
        <header className={classes.headerMini}>
            <nav className={classes.navMini}>
                <div>
                    <MenuRounded 
                        aria-controls="fade-menu" 
                        aria-haspopup="true" 
                        onClick={handleClick}
                        className={classes.headerMenu}
                        fontSize="large">
                        Open with
                    </MenuRounded>
                    <Menu
                        id="fade-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={open}
                        onClose={handleClose}
                        TransitionComponent={Fade}
                    >
                        <MenuItem onClick={productsClick} className={classes.headerMenuItem}>Productos</MenuItem>
                        <MenuItem onClick={cartClick} className={classes.headerMenuItem}>Carrito</MenuItem>
                        <MenuItem onClick={logOutClick} className={classes.headerMenuItem}>Cerrar sesión</MenuItem>
                    </Menu>
                </div>

                <h3 className={classes.headerTitle}>{productsTab ? 'Productos' : 'Carrito'}</h3>

                {productsTab ?
                
                <ShoppingCartOutlined className={classes.headerMenu} fontSize="large" onClick={() => dispatch(select_cart_action())}/>

                :
                
                <ArrowBackRounded className={classes.headerMenu} fontSize="large" onClick={() => dispatch(select_products_action())}/>

                }
            </nav>
        </header>

        }    
        </> 
    )
}

export default Header