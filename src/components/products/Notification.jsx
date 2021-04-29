import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hide_notif_action } from "../../redux/ducks";
import useStyles from "../../styles/Styles"

const Notification = () => {

    const classes = useStyles();

    const showNotif = useSelector(state => state.notif);

    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            dispatch(hide_notif_action());
        }, 2000)
    }, [showNotif])

    return (
    <>
        <div
            className={classes.notiDiv}
            style={{marginLeft: showNotif ? '0' : '-40%'}}>
            <h3 className={classes.notiText}>El producto se agregó con éxito</h3>   
        </div>     
    </>
    )
}

export default Notification
