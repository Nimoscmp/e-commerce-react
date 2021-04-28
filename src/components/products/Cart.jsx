import { useSelector } from "react-redux"
import useStyles from "../../styles/Styles"

const Cart = () => {

    const classes = useStyles();

    const cartArray = useSelector(state => state.cart)

    const defCartArray = cartArray.filter(item => item.id !== undefined);

    return (
    <>
        <main className={classes.cartBox}>
            
            {defCartArray.map(item => (

                <div 
                    key={item.id}
                    className={classes.cartDiv}>
                    
                </div>       

            ))}


            

        </main>
    </>
    )
}

export default Cart
