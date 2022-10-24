// import { hasTouchSupport, isWindowDefined } from './browser'

const windowWidth = () => {
  if (typeof window !== 'undefined') {
    return window.innerWidth
  }
  return 0
}

const windowHeight = () => {
  if (typeof window !== 'undefined') {
    return window.innerHeight
  }
  return 0
}

// const isLandscape = () => windowWidth() > windowHeight()

export const ResizeHandler = () => {
  let previousWidth = windowWidth()
  let previousHeight = windowHeight()
  // let previousIsLandscape = isLandscape()

  return (callback: () => void) => {
    const resetPreviousValues = () => {
      previousWidth = windowWidth()
      previousHeight = windowHeight()
      // previousIsLandscape = isLandscape()
    }

    // if (hasTouchSupport()) {
    //   if (previousWidth !== windowWidth() || previousIsLandscape !== isLandscape()) {
    //     callback()
    //     resetPreviousValues()
    //   }
    // } else {
    if (previousWidth !== windowWidth() || previousHeight !== windowHeight()) {
      callback()
      resetPreviousValues()
    }
    // }
  }
}
