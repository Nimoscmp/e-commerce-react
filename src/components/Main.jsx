import { useSelector } from "react-redux";
import Cart from "./products/Cart";
import Header from "./products/Header";
import Products from "./products/Products";

const Main = () => {

    const { products: productsTab } = useSelector(state => state.style)

    return (  
    <>
        <Header />
        {productsTab?
        <Products />
        :
        <Cart />
        }
    </>
    );
}
 
export default Main;