import { TerminalPrompt } from './terminal-prompt'

interface TerminalCursorProps {
  visible: boolean
}

export default function TerminalCursor({ visible }: TerminalCursorProps) {
  return (
    <div className="mt-4 flex items-center">
      <TerminalPrompt />
      <span className={visible ? 'opacity-100' : 'opacity-0'}>_</span>
    </div>
  )
}
