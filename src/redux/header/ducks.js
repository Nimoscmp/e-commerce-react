/*::::::::::::::::::::: 
:::  Initial data   :::
:::::::::::::::::::::::*/

//  Handle focus login inputs
const initialSelection = {
    products: true,
    cart: false
}

/*::::::::::::::::::::: 
:::      Types      :::
:::::::::::::::::::::::*/

const types = {
    //  Styles focus
    SELECT_CART: 'SELECT_CART',
    SELECT_PRODUCTS: 'SELECT_PRODUCTS'
}

/*::::::::::::::::::::: 
:::     Reducers    :::
:::::::::::::::::::::::*/

export function stylesHeader(state = initialSelection, action) {
    switch (action.type) {
        case types.SELECT_CART:
            return {
                products: false,
                cart: true
            }
        case types.SELECT_PRODUCTS:
            return {
                products: true,
                cart: false
            }
        default:
            return state;
    }
}

/*::::::::::::::::::::: 
:::     Actions     :::
:::::::::::::::::::::::*/

export const select_cart_action = () => async (dispatch) => {
    dispatch({
        type: types.SELECT_CART
    })
}
export const select_products_action = () => async (dispatch) => {
    dispatch({
        type: types.SELECT_PRODUCTS
    })
}