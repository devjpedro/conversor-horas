'use client'

import { useEffect } from 'react'

interface KeyboardShortcutsProps {
  onEnter?: () => void
  onCtrlC?: () => void
  onCtrlK?: () => void
}

export function useKeyboardShortcuts({
  onEnter,
  onCtrlC,
  onCtrlK,
}: KeyboardShortcutsProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter' && onEnter) {
        onEnter()
      }

      if ((event.ctrlKey || event.metaKey) && event.key === 'c' && onCtrlC) {
        onCtrlC()
      }

      if ((event.ctrlKey || event.metaKey) && event.key === 'k' && onCtrlK) {
        onCtrlK()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onEnter, onCtrlC, onCtrlK])
}
