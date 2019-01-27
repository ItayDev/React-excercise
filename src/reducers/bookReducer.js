import actionTypes from "./bookActions"

const initialState = {
    cart: [],
    loading: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case actionTypes.CART_ADD:
    return { ...state, cart: [...state.cart, payload.item] }
  case actionTypes.CART_REMOVE:
    return { ...state, loading: false,
         cart: state.cart.filter((item, index) => index != payload.index) }
  default:
    return state
  }
}
