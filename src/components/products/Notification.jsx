import useStyles from "../../styles/Styles"
import { useMediaQuery } from "@material-ui/core";
import { DoneRounded } from "@material-ui/icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hide_notif_action } from "../../redux/ducks";

const Notification = () => {
    //  Styles
    const classes = useStyles();
    const matches_880 = useMediaQuery('(min-width:880px)');
    const matches_576 = useMediaQuery('(min-width:576px)');
    //  Global states
    const showNotif = useSelector(state => state.notif);
    //  Dispatch
    const dispatch = useDispatch();

    useEffect(() => {
        const delay_ms = 2000;

        if(showNotif){
            setTimeout(() => {
                dispatch(hide_notif_action());
            }, delay_ms)
        }
        // eslint-disable-next-line    
    }, [showNotif])

    return (
    <>
        <div
            className={classes.notiDiv}
            style={{marginLeft: showNotif ? '0' : matches_880 ? '-42%' : matches_576 ? '-65%' : '-90%',
            width: matches_576 ? '35%' : '75%'}}>
            <h3 className={classes.notiText}>El producto se agregó al carrito</h3>   
            <DoneRounded className={classes.notiIcon}/>
        </div>     
    </>
    )
}

export default Notification
