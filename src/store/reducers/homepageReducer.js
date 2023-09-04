const initialState = {
  activeSlide: 1,
  activeColor: '#834692',
  activeSlideTwo: 1,
  slideTwoEvent: null,
  slideImageHeight: null,
  totalDesigns: 97339806,
}

const homepageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TOTAL_DESIGNS":
      return {
        ...state,
        totalDesigns: action.payload,
      }
    case "SET_SLIDE_TWO_EVENT":
      return {
        ...state,
        slideTwoEvent: action.payload,
      }
    case "SET_ACTIVE_SLIDE_TWO":
      return {
        ...state,
        activeSlideTwo: action.payload,
      }
    case "SET_ACTIVE_SLIDE":
      return {
        ...state,
        activeSlide: action.payload.activeSlide,
        activeColor: action.payload.activeColor,
      }
    case "SET_SLIDE_IMAGE_HEIGHT":
      return {
        ...state,
        slideImageHeight: action.payload,
      }
    default:
      return state
  }
}

export default homepageReducer
