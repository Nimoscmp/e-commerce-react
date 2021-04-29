import { Button, Dialog, DialogTitle } from "@material-ui/core"
import { CloseRounded } from "@material-ui/icons"
import { useDispatch, useSelector } from "react-redux"
import { hide_modal_action } from "../../redux/ducks"
import useStyles from "../../styles/Styles"

const Modal = () => {

    const classes = useStyles();

    const dispatch = useDispatch();
    const showModal = useSelector(state => state.showModal);



    return (
    <>
    <Dialog onClose={() => dispatch(hide_modal_action())} aria-labelledby="simple-dialog-title" open={showModal}>
        <div className={classes.modalTitle}>
            <h2 className={classes.modalh2}>Título</h2>
            <CloseRounded
                className={classes.modalClose}    
                onClick={() => dispatch(hide_modal_action())}
            />
        </div>
        <div className={classes.modalImage}>
            <img src="" alt="" className={classes.modalImg}/>
        </div>
        <div className={classes.modalDesc}>
            <p className={classes.modalParagh}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat magnam sequi provident veniam deleniti neque perspiciatis pariatur praesentium, tempora harum odio molestiae natus est! Blanditiis doloribus quam sed dignissimos in?</p>
        </div>
        <div className={classes.modalPrice}>
            <span className={classes.modalPricePrev}><del>$99</del></span>
            <span className={classes.modalPriceCurr}>$99</span>
        </div>
        <Button 
            variant="outlined" 
            className={classes.modalBtnClose}
            onClick={() => dispatch(hide_modal_action())}>Cerrar</Button>
        <Button 
            variant="contained" 
            className={classes.modalBtnCart}>Agregar al carrito</Button>
    </Dialog>        
    </>
    )
}

export default Modal
