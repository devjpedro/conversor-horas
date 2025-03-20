'use client'

import type React from 'react'

import { useTheme } from 'next-themes'
import { Toaster as Sonner } from 'sonner'

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            'group font-mono border border-gray-700 bg-gray-900 text-gray-300 shadow-lg',
          title: 'text-green-400 font-mono flex items-center gap-2',
          description: 'text-gray-300 font-mono',
          actionButton:
            'bg-transparent border border-gray-700 text-gray-300 hover:bg-gray-800',
          cancelButton:
            'bg-transparent border border-gray-700 text-gray-300 hover:bg-gray-800',
          closeButton: 'text-gray-500 hover:text-gray-300',
          success: 'group border-green-700 bg-gray-900 text-green-400',
          error: 'group border-red-700 bg-gray-900 text-red-400',
          info: 'group border-blue-700 bg-gray-900 text-blue-400',
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
