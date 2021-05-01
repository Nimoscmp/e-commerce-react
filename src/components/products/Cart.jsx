import { Button , useMediaQuery} from "@material-ui/core";
import { AddRounded, CloseRounded, RemoveRounded } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { product_removed_action, remove_from_cart_action, select_cart_action, select_products_action } from "../../redux/ducks";
import CartStyles from "../../styles/CartStyles";
// import useStyles from "../../styles/Styles"

const Cart = () => {

    //Styles
    const classes = CartStyles();
    const matches_524 = useMediaQuery('(min-width:524px)');
    const matches_720 = useMediaQuery('(min-width:720px)');
    const matches_1240 = useMediaQuery('(min-width:1240px)');
    //Dispatch
    const dispatch = useDispatch();
    //Global states
    const cartArray = useSelector(state => state.cart);
    //Local state
    const [totalPrice, setTotalPrice] = useState(0);

    const handleDelete = (id) => {
        const cartFiltered = cartArray.filter(item => item.id !== id);
        dispatch(remove_from_cart_action(cartFiltered));
        dispatch(product_removed_action());
    }

    const handleSubstract = i => {
        if(cartArray[i].quantity > 1){
            --cartArray[i].quantity;
        }
        dispatch(select_products_action());
        dispatch(select_cart_action());
        totalPriceCalc();
        
    }
    const handleAdd = i => {
        ++cartArray[i].quantity;
        dispatch(select_products_action());
        dispatch(select_cart_action());
        totalPriceCalc();
    }

    // Total price calculation
    const totalPriceCalc = () => {
        var addUp = []
        var total = 0;
        //  Do the add of the quantities if there are products in the cart
        if(cartArray.length > 0){
            //  Map the cart and put each result of the price in addUp
            cartArray.map((item , index) => {
                const mult = item.quantity * item.price;
                addUp[index] = mult;
                return true;
            })
            // Total all the elements of the array addUp
            addUp.forEach(i => {
                total += i;
            });
            setTotalPrice(total);
        }
    }

    //  Calculate price when cartArray changes
    useEffect(() => {
        totalPriceCalc();
        // eslint-disable-next-line
    }, [cartArray])

    return (
    <>
        {cartArray.length > 0 ?

        <main 
            className={classes.cartBox}
            style={{padding: matches_524 ? '1rem' : '0.5rem'}}>
            {cartArray.map((item , index)=> (
            <div 
                key={item.id}
                className={classes.cartDiv}
                style={{
                    height: matches_524 ? '12rem' : '13rem',
                    width: matches_720 ? '60%' : '95%'}}>
                <CloseRounded
                    fontSize="large" 
                    className={classes.cartDelete}
                    onClick={() => handleDelete(item.id)}/>

                <div className={classes.cartText}>
                    <h3 
                        className={classes.cartTitle}
                        style={{
                            margin: matches_524 ? '0.5rem 0' : '0.375rem 0',
                            fontSize: matches_524 ? '1.2rem' : '1rem'    
                        }}>{matches_524 ? item.title : item.title.length > 40 ? `${item.title.slice(0, 40)}...` : item.title}</h3>
                    <span className={classes.cartPrice}><strong>${item.price}</strong></span>
                    <div className={classes.cartMoreLess}>
                        <span className={classes.cartLess}>
                            <RemoveRounded 
                            className={classes.cartAdd}
                            onClick={() => handleSubstract(index)}/>
                        </span>
                        <span className={classes.cartNumber}>{item.quantity}</span>
                        <span className={classes.cartMore}>
                            <AddRounded 
                            className={classes.cartAdd}
                            onClick={() => handleAdd(index)}/>
                        </span>
                    </div>
                </div>

                <div className={matches_524 ? classes.cartImage : classes.cartImageMini}>
                    <img 
                        src={item.img} 
                        alt={item.title} 
                        className={matches_1240 ? classes.cartImgBig : matches_524 ? classes.cartImg : classes.cartImgMini}/>
                </div>
            </div>       
            ))}
            
            <Button 
                variant="outlined" 
                className={classes.cartPay}
                style={{width: matches_720 ? '60%' : '95%'}}>Pagar total: <strong className={classes.cartTotalPrice}> 
                ${totalPrice.toFixed(2)} 
            </strong></Button>
        </main>

        :

        <main className={classes.cartBox}>
            <h2 className={classes.cartEmpty}>No has agregado productos al carrito</h2>
        </main>
        }
    </>
    )
}

export default Cart
