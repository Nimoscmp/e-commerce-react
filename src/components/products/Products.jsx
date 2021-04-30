import useStyles from "../../styles/Styles"
import { BookmarkRounded, Grade } from '@material-ui/icons';
import { Button, CircularProgress, MenuItem, TextField } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_to_cart_action, hide_notif_action, product_added_action, product_detailed_action, show_modal_action, show_notif_action } from "../../redux/ducks";
import Notification from "./Notification";
import Modal from "./Modal";

const Products = () => {

    const classes = useStyles();

    const dispatch = useDispatch();

    //  Local states
    const [productsApi, setProductsApi] = useState([]);
    const [clickedAdd, setClickedAdd] = useState(false);
    const [categorySelected, setCategorySelected] = useState("Todos");
    const [loaded, setLoaded] = useState(false);
    const [prodAlready, setProdAlready] = useState(false);
    
    // Global states
    const {id: idP, title: titleP, price: priceP, img: imgP, quantity: quantityP} = useSelector(state => state.added);
    const showNotif = useSelector(state => state.notif);
    const cartArray = useSelector(state => state.cart);

    //  Receive data from API
    useEffect(() => {
        const getData = async() => {
            try {
                setLoaded(false);

                let base_url;
    
                if(categorySelected === "Todos"){
                    base_url = "https://fakestoreapi.com/products";
                } else {
                    base_url = `https://fakestoreapi.com/products/category/${categorySelected}`;
                }
                const response = await fetch(base_url);
                const result = await response.json();
                setProductsApi(result);

                setLoaded(true);
            } catch (error) {
                console.log(error);
            }
        }
        getData();
        // eslint-disable-next-line
    }, [categorySelected])

    // Button action Add to Cart
    const addToCart = (_id, _title, _price, _img) => {
        setClickedAdd(true);

        let quantity = 1;

        const productExists = cartArray.filter(item => item.id === _id)

        // cartArray[productExists.id - 1].quantity++;
        if(productExists.length === 0){
            dispatch(product_added_action(_id, _title, _price, _img, quantity));
        } else {
            setProdAlready(true);
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

    //  Button action Show details
    const handleShowDetails = (item) => {
        const {id, title, price, description, category, image} = item;

        dispatch(product_detailed_action(id, title, price, description, category, image));
        dispatch(show_modal_action());
    }

    //  Categories
    const categories = [
        "Todos",
        "men's clothing",
        "women's clothing",
        "jewelery",
        "electronics"
    ];
    //  When category changes
    const handleChangeCategory = (e) => {
        setCategorySelected(e.target.value);
    }

    return (
    <>  
        <section className={classes.searchBox}>
            <TextField
                id="search"
                select
                label="Categorías"
                value={categorySelected}
                onChange={handleChangeCategory}
                helperText="Selecciona una categoría"
                className={classes.searchSelect}
                // color="secondary"
                >
                {categories.map((option) => (
                    <MenuItem key={option} value={option}>
                    {option}
                    </MenuItem>
                ))}
            </TextField>
        </section>

        {loaded?
        <>
        <main className={classes.productBox}>

            {productsApi?.map(item => (
            <div className={classes.card} key={item.id}>
                <div className={classes.cardHeaderWrap}>
                    <div className={classes.cardHeader}>
                        <h3 className={classes.cardTitle}>
                            {item.title.length > 40 ? `${item.title.slice(0, 40)}...` : item.title}
                        </h3>
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
                    <Button 
                        variant="outlined" 
                        className={classes.cardBtnDetail}
                        onClick={() => handleShowDetails(item)}>Ver detalles</Button>
                    <Button 
                        variant="contained" 
                        className={classes.cardBtnCart}
                        onClick={() => addToCart(item.id, item.title, item.price, item.image)}>Agregar al carrito</Button>
                </div>
            </div>
            ))}
        </main>
        <Notification />
        <Modal />
        </>
        :
        <main className={classes.mainLoad}>
            <span className={classes.spanLoad}>Cargando...
                <CircularProgress color="secondary" />
            </span>
        </main>
        }
    </>
    )
}

export default Products
