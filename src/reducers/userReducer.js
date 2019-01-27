import actionTypes from "./userActions";

const initialState = {
    name: null,
    avatar: null
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case actionTypes.LOGIN:
    return { ...state, ...payload }
  case actionTypes.LOGOUT:
    return { ...state, name: null}
  default:
    return state
  }
}
