'use client'

import { useEffect } from 'react'

interface KeyboardShortcutsProps {
  onEnter?: () => void
  onCtrlC?: () => void
}

export function useKeyboardShortcuts({
  onEnter,
  onCtrlC,
}: KeyboardShortcutsProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter' && onEnter) {
        onEnter()
      }

      if ((event.ctrlKey || event.metaKey) && event.key === 'c' && onCtrlC) {
        onCtrlC()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onEnter, onCtrlC])
}
