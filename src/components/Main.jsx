/*::::::::::::::::::::: 
::::  Dependencies ::::
:::::::::::::::::::::::*/

//  React
import { useEffect } from "react";
//  Redux
import { useDispatch, useSelector } from "react-redux";
import { update_state_user_action } from "../redux/ducks";
//  Router
import { useHistory } from "react-router";
//  Firebase
import { FirebaseAuthConsumer } from "@react-firebase/auth";
//  Components
import Cart from "./products/Cart";
import Header from "./products/Header";
import Products from "./products/Products";


/*::::::::::::::::::::: 
:::::  Component  :::::
:::::::::::::::::::::::*/

const Main = () => {
    //  Dispatch
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

    window.addEventListener('error', function(e){
        console.log(e);
    })

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