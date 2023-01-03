import { useState, useEffect } from 'react'

/* Taken from https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs */
const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
      isDesktop: false,
    };
  }
export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
        isDesktop: window.innerWidth > 820,
      })
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return window.removeEventListener('resize', handleResize)
  }, [])

  return windowDimensions
}