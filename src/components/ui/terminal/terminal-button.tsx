'use client'

import { Button } from '@/components/ui/button'
import { Clock } from 'lucide-react'

interface TerminalConvertButtonProps {
  onClick: () => void
  disabled: boolean
}

export default function TerminalConvertButton({
  onClick,
  disabled,
}: TerminalConvertButtonProps) {
  return (
    <div className="pt-4">
      <Button
        className="border-none bg-green-700 font-mono text-white hover:bg-green-600"
        onClick={onClick}
        disabled={disabled}
      >
        <Clock className="mr-2 h-4 w-4" />
        converter
      </Button>
    </div>
  )
}
