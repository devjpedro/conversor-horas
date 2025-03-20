'use client'

import { useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Copy, Check } from 'lucide-react'
import { TerminalPrompt } from './terminal-prompt'

interface TerminalResultSectionProps {
  decimalTime: number
  copied: boolean
  onCopy: () => void
}

export default function TerminalResultSection({
  decimalTime,
  copied,
  onCopy,
}: TerminalResultSectionProps) {
  const resultRef = useRef<HTMLDivElement>(null)

  return (
    <div className="mt-6 space-y-2 border-t border-gray-700 pt-4">
      <div className="flex items-center">
        <TerminalPrompt />
        <span className="mr-2">resultado:</span>
        <div
          ref={resultRef}
          className="rounded bg-gray-800 px-3 py-1 font-mono text-green-400"
        >
          {decimalTime.toFixed(2)}
        </div>
        <Button
          variant="outline"
          size="icon"
          className="ml-2 h-8 w-8 border-gray-700 bg-transparent text-gray-300 hover:bg-gray-800"
          onClick={onCopy}
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      </div>
    </div>
  )
}
