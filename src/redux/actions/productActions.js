import { ActionTypes } from "../contants/actionTypes"
export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    }
}

export const selectedProducts = (product) => {
    return{types: ActionTypes.SELECTED_PRODUCTS,
    payload: product,}
}


export const removeProduct