export const SET_ACTIVE_SLIDE = (slideNumber) => {
  const getActiveColor = () => {
    if (slideNumber === 1) return "#834692"
    if (slideNumber === 2) return "#125867"
    if (slideNumber === 3) return "#00857D"
    if (slideNumber === 4) return "#1B45E3"
  }

  const payload = {
    activeSlide: slideNumber,
    activeColor: getActiveColor(),
  }
  return (dispatch) => {
    dispatch({ type: "SET_ACTIVE_SLIDE", payload })
  }
}
export const SET_SLIDE_IMAGE_HEIGHT = (payload) => {
  return (dispatch) => {
    dispatch({ type: "SET_SLIDE_IMAGE_HEIGHT", payload })
  }
}

export const SET_SLIDE_TWO_EVENT = (payload) => {
  return (dispatch) => {
    dispatch({ type: "SET_SLIDE_TWO_EVENT", payload })
  }
}

export const SET_ACTIVE_SLIDE_TWO = (payload) => {
  return (dispatch) => {
    dispatch({ type: "SET_ACTIVE_SLIDE_TWO", payload })
  }
}
