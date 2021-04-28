import useStyles from "../../styles/Styles"
import { BookmarkRounded, Grade } from '@material-ui/icons';
import { Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_to_cart_action, product_added_action } from "../../redux/header/ducks";

const Products = () => {

    const classes = useStyles();

    const dispatch = useDispatch();

    //  Local states
    const [productsApi, setProductsApi] = useState([]);
    
    const {id: idP, title: titleP, price: priceP, img: imgP} = useSelector(state => state.added);
    const cartArray = useSelector(state => state.added);

    useEffect(() => {
        const getData = async() => {
            const base_url = 'https://fakestoreapi.com/products';
            const response = await fetch(base_url);
            const result = await response.json();
            setProductsApi(result);
        }
        getData();
        // eslint-disable-next-line
    }, [])

    const addToCart = (_id, _title, _price, _img) => {
        dispatch(product_added_action(_id, _title, _price, _img))
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
        }
        addProducts();
        // eslint-disable-next-line 
    }, [idP, titleP, priceP, imgP])

    useEffect(() => {
        if(cartArray?.length > 0){
            cartArray.shift();
        }
    }, [])

    return (
    <>
        <main className={classes.productBox}>
            {productsApi?.map(item => (
            <div className={classes.card} key={item.id}>
                <div className={classes.cardHeaderWrap}>
                    <div className={classes.cardHeader}>
                        <h3 className={classes.cardTitle}>{item.title}</h3>
                        <BookmarkRounded className={classes.cardFav} fontSize="large"/>
                    </div>
                </div>
                <div className={classes.cardPrice}>
                    <span className={classes.cardPricePrev}><small>Categoría</small></span>
                    <span>{item.category}</span>
                </div>
                <div className={classes.cardPrice}>
                    <span className={classes.cardPricePrev}><small><del>${Math.round(item.price * 1.2)}</del></small></span>
                    <span className={classes.cardPriceCurr}><strong>${item.price}</strong></span>
                </div>
                <div className={classes.cardImage}>
                    <img 
                        src={item.image} 
                        alt={item.title}
                        className={classes.cardImg}/>
                </div>
                <div className={classes.cardPrice}>
                    <Grade className={classes.cardRate}/>
                    <Grade className={classes.cardRate}/>
                    <Grade className={classes.cardRate}/>
                    <Grade className={classes.cardRate}/>
                    <Grade className={classes.cardRate}/>
                </div>
                <div className={classes.cardButtons}>
                    <Button variant="outlined" className={classes.cardBtnDetail}>Ver detalles</Button>
                    <Button 
                        variant="contained" 
                        className={classes.cardBtnCart}
                        onClick={() => addToCart(item.id, item.title, item.price, item.image)}>Agregar al carrito</Button>
                </div>
            </div>
            ))}
        </main>
    </>
    )
}

export default Products
