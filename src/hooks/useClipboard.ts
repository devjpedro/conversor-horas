'use client'

import { useState } from 'react'
import { toast } from 'sonner'

export function useClipboard() {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = (text?: string | number) => {
    if (text !== undefined) {
      const textToCopy = typeof text === 'number' ? text.toFixed(2) : text
      navigator.clipboard.writeText(textToCopy)
      setCopied(true)

      toast('Copiado!', {
        description: 'Valor copiado para a área de transferência',
      })

      setTimeout(() => {
        setCopied(false)
      }, 2000)
    }
  }

  return { copied, copyToClipboard }
}
