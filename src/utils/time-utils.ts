interface ParsedTime {
  hours: number
  minutes: number
}

/**
 * Parses a time string into hours and minutes
 * Supports formats like "1:30", "1h30m", "1h 30m", etc.
 */
export function parseTimeString(timeString: string): ParsedTime | null {
  // Try to parse time formats like "1:30", "1h30m", "1h 30m", etc.
  const timeRegex = /(\d+)[:h]?\s*(\d+)?/
  const match = timeString.match(timeRegex)

  if (match) {
    const hours = Number.parseInt(match[1]) || 0
    const minutes = Number.parseInt(match[2] || '0') || 0

    return { hours, minutes }
  }

  return null
}

/**
 * Converts hours and minutes to decimal time
 */
export function convertToDecimal(hours: number, minutes: number): number {
  return hours + minutes / 60
}

/**
 * Formats decimal time to string with 2 decimal places
 */
export function formatDecimalTime(decimalTime: number): string {
  return decimalTime.toFixed(2)
}
