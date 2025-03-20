'use client'

import { parseTimeString } from '@/utils/time-utils'
import type React from 'react'

import { useState } from 'react'
import { toast } from 'sonner'

export function useTimeConverter() {
  const [hours, setHours] = useState('')
  const [minutes, setMinutes] = useState('')
  const [decimalTime, setDecimalTime] = useState<number | null>(null)

  const convertToDecimal = () => {
    const hoursNum = Number.parseInt(hours) || 0
    const minutesNum = Number.parseInt(minutes) || 0

    const decimal = hoursNum + minutesNum / 60
    setDecimalTime(decimal)
  }

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault()
    const pastedText = e.clipboardData.getData('text')

    const parsedTime = parseTimeString(pastedText)

    if (parsedTime) {
      setHours(parsedTime.hours.toString())
      setMinutes(parsedTime.minutes.toString())
    } else {
      toast('Formato inválido', {
        description:
          'Por favor, cole um horário no formato válido (ex: 1:30, 1h30m)',
      })
    }
  }

  return {
    hours,
    minutes,
    decimalTime,
    setHours,
    setMinutes,
    convertToDecimal,
    handlePaste,
  }
}
