import { useSnackbar } from 'notistack'
import { useState } from 'react'

export function useCopyToClipboard() {
  const [copiedText, setCopiedText] = useState(null)
  const { enqueueSnackbar } = useSnackbar()

  const copy = async (text) => {
    if (!navigator?.clipboard) {
      enqueueSnackbar('Clipboard not supported', { variant: 'warning' })
      console.warn('Clipboard not supported')
      return false
    }

    try {
      await navigator.clipboard.writeText(text)
      setCopiedText(text)
      return true
    } catch (error) {
      console.warn('Copy failed', error)
      setCopiedText(null)
      return false
    }
  }

  return [copiedText, copy]
}
