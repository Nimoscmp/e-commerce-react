import { Button } from "@material-ui/core";
import { AddRounded, CancelPresentation, RemoveRounded } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux"
import { remove_from_cart_action } from "../../redux/header/ducks";
import useStyles from "../../styles/Styles"

const Cart = () => {

    const classes = useStyles();

    const cartArray = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const defCartArray = cartArray.filter(item => item.id !== undefined);

    const handleDelete = (id) => {
        const cartFiltered = defCartArray.filter(item => item.id !== id);
        dispatch(remove_from_cart_action(cartFiltered));
    }

    return (
    <>
        {defCartArray.length > 0 ?

        <main className={classes.cartBox}>
            {defCartArray.map(item => (
            <div 
                key={item.id}
                className={classes.cartDiv}>
                <CancelPresentation 
                    fontSize="large" 
                    className={classes.cartDelete}
                    onClick={() => handleDelete(item.id)}/>

                <div className={classes.cartText}>
                    <h3 className={classes.cartTitle}>{item.title}</h3>
                    <span className={classes.cartPrice}><strong>${item.price}</strong></span>
                    <div className={classes.cartMoreLess}>
                        <span className={classes.cartLess}>
                            <RemoveRounded className={classes.cartAdd}/>
                        </span>
                        <span className={classes.cartNumber}>1</span>
                        <span className={classes.cartMore}>
                            <AddRounded className={classes.cartAdd}/>
                        </span>
                    </div>
                </div>

                <div className={classes.cartImage}>
                    <img src={item.img} alt={item.title} className={classes.cartImg}/>
                </div>
            </div>       
            ))}
            
            <Button variant="outlined" className={classes.cartPay}>Pagar total</Button>
        </main>

        :

        <main className={classes.cartBox}>
            <h2>No has agregado productos al carrito</h2>
        </main>
        }
    </>
    )
}

export default Cart
