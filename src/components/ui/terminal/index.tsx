'use client'

import { useCursorBlink } from '@/hooks/useCursorBlink'
import { useTimeConverter } from '@/hooks/useTimeConverter'
import TerminalHeader from './terminal-header'
import TerminalIntro from './terminal-intro'
import TerminalInputSection from './terminal-inputs'
import TerminalConvertButton from './terminal-button'
import TerminalResultSection from './terminal-result'
import TerminalCursor from './terminal-cursor'
import { useClipboard } from '@/hooks/useClipboard'
import { toast } from 'sonner'
import { Terminal } from 'lucide-react'
import { useKeyboardShortcuts } from '@/hooks/useKeyboardShortcuts'

export default function TerminalConverter() {
  const {
    hours,
    minutes,
    decimalTime,
    setHours,
    setMinutes,
    convertToDecimal,
    handlePaste,
  } = useTimeConverter()

  const { cursorVisible } = useCursorBlink()
  const { copied, copyToClipboard } = useClipboard()

  const handleEnterConvert = () => {
    if (!hours && !minutes) {
      toast.error('Erro ao executar comando', {
        description: 'Informe horas ou minutos para converter',
        icon: <Terminal className="h-4 w-4" />,
      })

      return
    }

    convertToDecimal()

    toast.success('Comando executado', {
      description: 'Conversão realizada com sucesso',
      icon: <Terminal className="h-4 w-4" />,
    })
  }

  const handleK = () => {
    toast.info('Comando secreto executado', {
      description: 'Criado por @devjpedro',
      icon: <Terminal className="h-4 w-4" />,
    })
  }

  useKeyboardShortcuts({
    onCtrlK: handleK,
    onEnter: handleEnterConvert,
    onCtrlC: decimalTime
      ? () => copyToClipboard(decimalTime.toFixed(2))
      : undefined,
  })

  return (
    <div className="w-full max-w-2xl overflow-hidden rounded-lg border border-gray-700 shadow-lg">
      <TerminalHeader title="time-converter.sh" />

      <div className="bg-gray-950 p-6 font-mono text-gray-300">
        <TerminalIntro />

        <TerminalInputSection
          hours={hours}
          minutes={minutes}
          onHoursChange={(e) => setHours(e.target.value)}
          onMinutesChange={(e) => setMinutes(e.target.value)}
          onPaste={handlePaste}
        />

        <TerminalConvertButton
          onClick={convertToDecimal}
          disabled={!hours && !minutes}
        />

        {decimalTime !== null && (
          <TerminalResultSection
            decimalTime={decimalTime}
            copied={copied}
            onCopy={copyToClipboard}
          />
        )}

        <TerminalCursor visible={cursorVisible} />
      </div>
    </div>
  )
}
