'use client'

import type React from 'react'

import { Input } from '@/components/ui/input'
import { TerminalPrompt } from './terminal-prompt'

interface TerminalInputSectionProps {
  hours: string
  minutes: string
  onHoursChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onMinutesChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onPaste: (e: React.ClipboardEvent<HTMLInputElement>) => void
}

export default function TerminalInputSection({
  hours,
  minutes,
  onHoursChange,
  onMinutesChange,
}: TerminalInputSectionProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center">
        <TerminalPrompt />
        <span className="mr-2">horas:</span>
        <Input
          className="w-20 border-gray-700 bg-transparent font-mono text-gray-200 focus:border-green-500 focus:ring-green-500"
          type="number"
          min="0"
          placeholder="0"
          value={hours}
          onChange={onHoursChange}
          aria-label="Horas"
        />
        <span className="ml-2 text-xs text-gray-500">
          Pressione Enter para converter
        </span>
      </div>

      <div className="flex items-center">
        <TerminalPrompt />
        <span className="mr-2">minutos:</span>
        <Input
          className="w-20 border-gray-700 bg-transparent font-mono text-gray-200 focus:border-green-500 focus:ring-green-500"
          type="number"
          min="0"
          max="59"
          placeholder="0"
          value={minutes}
          onChange={onMinutesChange}
        />
      </div>
    </div>
  )
}
