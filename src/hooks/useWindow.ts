import { useEffect, useState } from "react";

export function useWindow() {
  const [width, setWidth] = useState(window.innerWidth)

  const handleResize = () => {
    // Debounce resize event
    if (width === window.innerWidth) return
    setWidth(window.innerWidth)
  }

  // Create debounce function
  const debounce = (func: () => void, wait: number) => {
    let timeout: NodeJS.Timeout
    return () => {
      clearTimeout(timeout)
      timeout = setTimeout(func, wait)
    }
  }


  useEffect(() => {
    window.addEventListener('resize', debounce(handleResize, 50))
    return () => window.removeEventListener('resize', debounce(handleResize, 50))
  }, [])

  return width
}