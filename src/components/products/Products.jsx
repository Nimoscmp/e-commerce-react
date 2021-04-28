import useStyles from "../../styles/Styles"
import { BookmarkRounded, Grade } from '@material-ui/icons';
import { Button } from "@material-ui/core";
import { useEffect, useState } from "react";

const Products = () => {

    const classes = useStyles();

    const [productsApi, setProductsApi] = useState([]);

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

    return (
    <>
        <main className={classes.productBox}>
            {productsApi?.map(item => (
            <div className={classes.card} key={item.id}>
                <div className={classes.cardHeader}>
                    <h3 className={classes.cardTitle}>{item.title}</h3>
                    <BookmarkRounded className={classes.cardFav} fontSize="large"/>
                </div>
                {/* <hr className={classes.cardLine}/> */}
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
                    <Button variant="contained" className={classes.cardBtnCart}>Agregar al carrito</Button>
                </div>
            </div>
            ))}
        </main>
    </>
    )
}

export default Products
