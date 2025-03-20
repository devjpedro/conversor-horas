'use client'

import { useEffect } from 'react'

interface KeyboardShortcutsProps {
  onEnter?: () => void
  onCtrlC?: () => void
  onCtrlJ?: () => void
}

export function useKeyboardShortcuts({
  onEnter,
  onCtrlC,
  onCtrlJ,
}: KeyboardShortcutsProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter' && onEnter) {
        onEnter()
      }

      if ((event.ctrlKey || event.metaKey) && event.key === 'c' && onCtrlC) {
        onCtrlC()
      }

      if ((event.ctrlKey || event.metaKey) && event.key === 'j' && onCtrlJ) {
        onCtrlJ()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onEnter, onCtrlC, onCtrlJ])
}
