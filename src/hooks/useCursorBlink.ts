'use client'

import { useState, useEffect } from 'react'

export function useCursorBlink(interval = 500) {
  const [cursorVisible, setCursorVisible] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, interval)

    return () => clearInterval(timer)
  }, [interval])

  return { cursorVisible }
}
