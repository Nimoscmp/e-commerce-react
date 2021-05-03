import { FirebaseAuthConsumer } from "@react-firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { update_state_user_action } from "../redux/ducks";
import Cart from "./products/Cart";
import Header from "./products/Header";
import Products from "./products/Products";

const Main = () => {
    //  Disptach
    const dispatch = useDispatch()
    //  Global states
    const { products: productsTab } = useSelector(state => state.style)
    const fbUser = useSelector(state => state.fbUser);

    let history = useHistory();
    
    useEffect(() => {
        if(!fbUser.isSignedIn){
            history.push('/login');
        }
        // eslint-disable-next-line
    }, [fbUser])

    return (  
    <>
        <Header />
        {productsTab?
        <Products />
        :
        <Cart />
        }

        <FirebaseAuthConsumer>
          {({ isSignedIn, user, providerId }) => {
            const fbAuthConsumer = { isSignedIn , user , providerId };
            setTimeout(() => {
                dispatch(update_state_user_action(fbAuthConsumer));
            }, 100);
          }}
        </FirebaseAuthConsumer>
    </>
    );
}
 
export default Main;