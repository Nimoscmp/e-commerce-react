/*::::::::::::::::::::: 
:::  Initial data   :::
:::::::::::::::::::::::*/

//  Handle focus login inputs
const initialSelection = {
    products: true,
    cart: false
}
// Initial Cart
const initialCart = [];
// Initial product added
const productAdded = {}


/*::::::::::::::::::::: 
:::      Types      :::
:::::::::::::::::::::::*/

const types = {
    //  Styles focus
    SELECT_CART: 'SELECT_CART',
    SELECT_PRODUCTS: 'SELECT_PRODUCTS',

    //  Cart selection
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    //  Product added
    PRODUCT_ADDED: 'PRODUCT_ADDED' 
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

export function cartReducer(state = initialCart, action) {
    switch (action.type) {
        case types.ADD_TO_CART:
            return [
                ...state,
                action.payload
            ]
        case types.REMOVE_FROM_CART:
            return [
                ...state
            ]
        default:
            return state;
    }
}

export function productAddedReducer(state = productAdded, action) {
    switch (action.type) {
        case types.PRODUCT_ADDED:
            return {
                id: action.payload.id,
                title: action.payload.title,
                price: action.payload.price,
                img: action.payload.img
            }
        default:
            return state;
    }
}

/*::::::::::::::::::::: 
:::     Actions     :::
:::::::::::::::::::::::*/

//  Styles Header
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

//  Cart products
export const add_to_cart_action = (_product) => async (dispatch) => {
    dispatch({
        type: types.ADD_TO_CART,
        payload: _product
    })
}
//  Product added
export const product_added_action = (_id, _title, _price, _img) => async (dispatch) => {
    dispatch({
        type: types.PRODUCT_ADDED,
        payload: {
            id: _id,
            title: _title,
            price: _price,
            img: _img
        }
    })
}