const initialState = {
  mobileMenuShow: false,
}

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SHOW_MOBILE_MENU":
      return {
        ...state,
        mobileMenuShow: action.payload,
      }
    default:
      return state
  }
}

export default globalReducer
