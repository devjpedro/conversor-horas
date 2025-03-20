'use client'

import { useClipboard } from '@/hooks/useClipboard'
import { useCursorBlink } from '@/hooks/useCursorBlink'
import { useTimeConverter } from '@/hooks/useTimeConverter'
import TerminalHeader from './terminal-header'
import TerminalIntro from './terminal-intro'
import TerminalInputSection from './terminal-inputs'
import TerminalConvertButton from './terminal-button'
import TerminalResultSection from './terminal-result'
import TerminalCursor from './terminal-cursor'

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
