import { Button, Dialog } from "@material-ui/core"
import { CloseRounded } from "@material-ui/icons"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { add_to_cart_action, hide_modal_action, product_added_action, show_notif_action } from "../../redux/ducks"
import useStyles from "../../styles/Styles"

const Modal = () => {

    const classes = useStyles();

    const dispatch = useDispatch();   //Local states
    const [clickedAdd, setClickedAdd] = useState(false);
    // Global states
    const showModal = useSelector(state => state.showModal);
    const { id , title , price , description , category , img} = useSelector(state => state.detailed);
    const {id: idP, title: titleP, price: priceP, img: imgP} = useSelector(state => state.added);

    // Button action Add to Cart
    const addToCart = (_id, _title, _price, _img) => {
        setClickedAdd(true);
        dispatch(product_added_action(_id, _title, _price, _img));
        dispatch(show_notif_action());
    }
    
    useEffect(() => {
        const addProducts = () => {
            const productsArray = {
                id: idP,
                title: titleP,
                price: priceP,
                img: imgP
            }

            dispatch(add_to_cart_action(productsArray));
            setClickedAdd(false);
        }
        if(clickedAdd){
            addProducts();
        }
        // eslint-disable-next-line 
    }, [idP, titleP, priceP, imgP])

    return (
    <>
    <Dialog 
        onClose={() => dispatch(hide_modal_action())} 
        open={showModal}
        className={classes.dialog}
        aria-labelledby="simple-dialog-title" >
        <div className={classes.modalTitle}>
            <h4 className={classes.modalh2}>{title}</h4>
            <CloseRounded
                className={classes.modalClose}    
                onClick={() => dispatch(hide_modal_action())}
            />
        </div>
        <div className={classes.modalImage}>
            <img src={img} alt={title} className={classes.modalImg}/>
        </div>
        <h5 className={classes.modalCat}>{category}</h5>
        <div className={classes.modalDesc}>
            <p className={classes.modalParagh}><small>{description?.toLowerCase()}</small></p>
        </div>
        <div className={classes.modalPrice}>
            <span className={classes.modalPricePrev}><del>${Math.round(price * 1.2)}</del></span>
            <span className={classes.modalPriceCurr}><strong>${price}</strong></span>
        </div>
        <div className={classes.modalButtons}>
            <Button 
                variant="outlined" 
                className={classes.modalBtnClose}
                onClick={() => dispatch(hide_modal_action())}>Cerrar</Button>
            <Button 
                variant="contained" 
                className={classes.modalBtnCart}
                onClick={() => addToCart(id, title, price, img)}>Agregar al carrito</Button>
        </div>
    </Dialog>        
    </>
    )
}

export default Modal
