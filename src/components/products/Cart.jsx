import { Button } from "@material-ui/core";
import { AddRounded, CloseRounded, RemoveRounded } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { remove_from_cart_action, select_cart_action, select_products_action } from "../../redux/ducks";
import useStyles from "../../styles/Styles"

const Cart = () => {

    //Styles
    const classes = useStyles();
    //Dispatch
    const dispatch = useDispatch();
    //Global states
    const cartArray = useSelector(state => state.cart);
    const { products: productsTab } = useSelector(state => state.style);
    //Local state
    const [totalPrice, setTotalPrice] = useState(0);

    // const defCartArray = cartArray.filter(item => item.id !== undefined);

    const handleDelete = (id) => {
        const cartFiltered = cartArray.filter(item => item.id !== id);
        dispatch(remove_from_cart_action(cartFiltered));
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

    // Total price
    const totalPriceCalc = () => {

        var sum = []
        var total = 0;

        if(cartArray.length > 0){

            cartArray.map((item , index) => {
                const mult = item.quantity * item.price;
                sum[index] = mult;
                return true;
            })

            sum.forEach(i => {
                total += i;
            });

            setTotalPrice(total);
        }
    }

    useEffect(() => {
        totalPriceCalc();
    }, [])
    useEffect(() => {
        totalPriceCalc();
    }, [cartArray])

    return (
    <>
        {cartArray.length > 0 ?

        <main className={classes.cartBox}>
            {cartArray.map((item , index)=> (
            <div 
                key={item.id}
                className={classes.cartDiv}>
                <CloseRounded
                    fontSize="large" 
                    className={classes.cartDelete}
                    onClick={() => handleDelete(item.id)}/>

                <div className={classes.cartText}>
                    <h3 className={classes.cartTitle}>{item.title}</h3>
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

                <div className={classes.cartImage}>
                    <img src={item.img} alt={item.title} className={classes.cartImg}/>
                </div>
            </div>       
            ))}
            
            <Button variant="outlined" className={classes.cartPay}>Pagar total: <strong className={classes.cartTotalPrice}> 
                ${totalPrice.toFixed(2)} 
            </strong></Button>
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
