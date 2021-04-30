/*::::::::::::::::::::: 
:::  Initial data   :::
:::::::::::::::::::::::*/

//  Handle focus login inputs
const initialSelection = {
    products: true,
    cart: false
}
//  Initial Cart
const initialCart = [];
//  Initial product added
const productAdded = {}
//  Initial status notification
const stateNotif = false;
//  Initial status show modal details
const showModal = false;
//  Initial product detailed
const productDetailed = {}

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
    PRODUCT_ADDED: 'PRODUCT_ADDED',
    PRODUCT_REMOVED: 'PRODUCT_REMOVED',
    //  Notifications
    SHOW_NOTIFICATION: 'SHOW_NOTIFICATION',
    HIDE_NOTIFICATION: 'HIDE_NOTIFICATION',
    //  Modal dialog
    SHOW_MODAL: 'SHOW_MODAL',
    HIDE_MODAL: 'HIDE_MODAL',
    //  Product detailed
    PRODUCT_DETAILED: 'PRODUCT_DETAILED',
    // Quantity types
    QUANTITY_ADD: 'QUANTITY_ADD',
    QUANTITY_SUBSTRACT: 'QUANTITY_SUBSTRACT'
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
            return action.payload
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
                img: action.payload.img,
                quantity: action.payload.quantity
            }
        case types.PRODUCT_REMOVED:
            return {}
        default:
            return state;
    }
}

export function notifReducer(state = stateNotif, action) {
    switch (action.type) {
        case types.SHOW_NOTIFICATION:
            return true;
        case types.HIDE_NOTIFICATION:
            return false;
        default:
            return state;
    }
}

export function showModalReducer(state = showModal, action) {
    switch (action.type) {
        case types.SHOW_MODAL:
            return true;
        case types.HIDE_MODAL:
            return false;
        default:
            return state;
    }
}

export function productDetailedReducer(state = productDetailed, action) {
    switch (action.type) {
        case types.PRODUCT_DETAILED:
            return {
                id: action.payload.id,
                title: action.payload.title,
                price: action.payload.price,
                description: action.payload.description,
                category: action.payload.category,
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
export const remove_from_cart_action = (cartFiltered) => async (dispatch) => {
    dispatch({
        type: types.REMOVE_FROM_CART,
        payload: cartFiltered
    })
}
//  Product added
export const product_added_action = (_id, _title, _price, _img, _quantity) => async (dispatch) => {
    dispatch({
        type: types.PRODUCT_ADDED,
        payload: {
            id: _id,
            title: _title,
            price: _price,
            img: _img,
            quantity: _quantity
        }
    })
}
export const product_removed_action = () => async (dispatch) => {
    dispatch({
        type: types.PRODUCT_REMOVED,
    })
}
//  Notifications
export const show_notif_action = () => async (dispatch) => {
    dispatch({
        type: types.SHOW_NOTIFICATION
    })
}
export const hide_notif_action = () => async (dispatch) => {
    dispatch({
        type: types.HIDE_NOTIFICATION
    })
}
//  Modal
export const show_modal_action = () => async (dispatch) => {
    dispatch({
        type: types.SHOW_MODAL
    })
}
export const hide_modal_action = () => async (dispatch) => {
    dispatch({
        type: types.HIDE_MODAL
    })
}
//  Product added
export const product_detailed_action = (_id, _title, _price, _description, _category, _img) => async (dispatch) => {
    dispatch({
        type: types.PRODUCT_DETAILED,
        payload: {
            id: _id,
            title: _title,
            price: _price,
            description: _description,
            category: _category,
            img: _img
        }
    })
}