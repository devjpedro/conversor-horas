import { Toaster } from './components/ui/sonner'
import TerminalConverter from './components/ui/terminal'

function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900 p-4">
      <TerminalConverter />
      <Toaster
        theme="dark"
        position="bottom-center"
        toastOptions={{
          className: 'terminal-toast',
        }}
      />
    </div>
  )
}

export default App
