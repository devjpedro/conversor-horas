export default function TerminalHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center bg-gray-800 px-4 py-2">
      <div className="flex space-x-2">
        <div className="h-3 w-3 rounded-full bg-red-500"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
        <div className="h-3 w-3 rounded-full bg-green-500"></div>
      </div>
      <div className="mx-auto font-mono text-sm text-gray-400">{title}</div>
    </div>
  )
}
