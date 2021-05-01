import { Button, Dialog, useMediaQuery } from "@material-ui/core"
import { CloseRounded } from "@material-ui/icons"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { add_to_cart_action, hide_modal_action, product_added_action, select_cart_action, select_products_action, show_notif_action } from "../../redux/ducks"
import ModalStyles from "../../styles/ModalStyles"
// import useStyles from "../../styles/Styles"

const Modal = () => {
    //  Styles
    const classes = ModalStyles();
    const matches_576 = useMediaQuery('(min-width:576px)');
    //  Dispatch
    const dispatch = useDispatch();   
    //  Local states
    const [clickedAdd, setClickedAdd] = useState(false);
    //  Global states
    const showModal = useSelector(state => state.showModal);
    const { id , title , price , description , category , img} = useSelector(state => state.detailed);
    const {id: idP, title: titleP, price: priceP, img: imgP, quantity: quantityP} = useSelector(state => state.added);
    const cartArray = useSelector(state => state.cart);

    // Button action Add to Cart
    const addToCart = (_id, _title, _price, _img) => {
        setClickedAdd(true);
        let quantity = 1;
        let indexCurr;

        const productExists = cartArray.filter((item, index) => {
            if(item.id === _id){
                indexCurr = index;
            }
            return item.id === _id
        })

        if(productExists.length === 0){
            dispatch(product_added_action(_id, _title, _price, _img, quantity));
        } else {
            ++cartArray[indexCurr].quantity;
        }
        
        dispatch(show_notif_action());
    }
    
    useEffect(() => {
        const addProducts = () => {
            const productsArray = {
                id: idP,
                title: titleP,
                price: priceP,
                img: imgP,
                quantity: quantityP
            }

            dispatch(add_to_cart_action(productsArray));
            setClickedAdd(false);
        }
        if(clickedAdd){
            addProducts();
        }
        // eslint-disable-next-line 
    }, [idP, titleP, priceP, imgP])

    //  Add to cart actions
    const handleAddTocart = (_id_, _title_, _price_, _img_) => {
        addToCart(_id_, _title_, _price_, _img_);
        dispatch(hide_modal_action());
        dispatch(select_cart_action());
        dispatch(select_products_action());
        dispatch(select_cart_action());
        dispatch(select_products_action());
    }

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
        <div 
            className={classes.modalButtons}
            style={{flexDirection: matches_576 ? 'row' : 'column-reverse'}}>
            <Button 
                variant="outlined" 
                className={classes.modalBtnClose}
                onClick={() => dispatch(hide_modal_action())}>Cerrar</Button>
            <Button 
                variant="contained" 
                className={classes.modalBtnCart}
                onClick={() => handleAddTocart(id, title, price, img)}>Agregar al carrito</Button>
        </div>
    </Dialog>        
    </>
    )
}

export default Modal
