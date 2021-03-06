/*::::::::::::::::::::: 
::::  Dependencies ::::
:::::::::::::::::::::::*/

//  React
// import { useState } from "react"
//  Redux
import { useDispatch, useSelector } from "react-redux"
import { hide_modal_action } from "../../redux/ducks"
//  Styles
import { Button, Dialog, useMediaQuery } from "@material-ui/core"
import { CloseRounded } from "@material-ui/icons"
import ModalStyles from "../../styles/ModalStyles"


/*::::::::::::::::::::: 
:::::  Component  :::::
:::::::::::::::::::::::*/

const Modal = ({ addToCartModal }) => {
    //  Styles
    const classes = ModalStyles();
    const matches_576 = useMediaQuery('(min-width:576px)');
    //  Dispatch
    const dispatch = useDispatch();   
    //  Local states
    // const [clickedAdd, setClickedAdd] = useState(false);
    //  Global states
    const showModal = useSelector(state => state.showModal);
    const { id , title , price , description , category , img} = useSelector(state => state.detailed);
    // const {id: idP, title: titleP, price: priceP, img: imgP, quantity: quantityP} = useSelector(state => state.added);
    // const cartArray = useSelector(state => state.cart);

    //  Add to cart actions
    const handleAddTocart = (_id_, _title_, _price_, _img_) => {
        addToCartModal(_id_, _title_, _price_, _img_);
        dispatch(hide_modal_action());
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
        <h5 className={classes.modalCat}>{category?.charAt(0).toUpperCase() + category?.slice(1)}</h5>
        <div className={classes.modalDesc}>
            <p className={classes.modalParagh}><small>{description?.charAt(0).toUpperCase() + description?.slice(1)}</small></p>
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
