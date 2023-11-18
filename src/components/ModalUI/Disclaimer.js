import { useEffect, useRef, useState } from 'react'
import ConfirmDialog from './ConfirmDialog'
import { Button, DialogActions, Link, Typography } from '@mui/material'
import { useSearchParams } from 'react-router-dom'

const Disclaimer = ({ storageKey = 'block-disclaimer', ...props }) => {
  const [searchParams] = useSearchParams()
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false)
  const isFirstRender = useRef(true)

  const searchParam = searchParams.get('success')

  function handleClose() {
    setIsConfirmDialogOpen(false)
  }

  function handleBlock() {
    handleClose()
    localStorage.setItem(storageKey, 'true')
  }

  useEffect(() => {
    if (!localStorage.getItem(storageKey) && isFirstRender.current) {
      setIsConfirmDialogOpen(true)
    }
    isFirstRender.current = false
  }, [])

  return (
    <ConfirmDialog
      isConfirmDialogOpen={isConfirmDialogOpen && !searchParam}
      onCancel={handleClose}
      title="Important Information About Demo Content"
      renderDialogContent={() => (
        <>
          <Typography>
            Please note that this is a free demo service and the server may take
            30-60 seconds to wake up if there hasn't been recent activity.
            Additionally, some functionalities of the project may be limited or
            not fully operational. Your patience and understanding are greatly
            appreciated.
          </Typography>
          <Typography mt={2}>
            It's important to note that the images of hotels and their
            descriptions showcased in this demo have been sourced from{' '}
            <Link href="https://www.booking.com/">Booking.com</Link>. This
            choice has been made to create a more natural and realistic
            representation of how the booking process would appear. Please
            understand that this content is used for demonstration purposes only
            and is not intended for commercial use. Thank you for exploring this
            demo.
          </Typography>
        </>
      )}
      {...props}
      renderActions={() => (
        <DialogActions>
          <Button aria-label="Close" onClick={handleClose}>
            Close
          </Button>
          <Button aria-label="Block-message" onClick={handleBlock}>
            Never show me again
          </Button>
        </DialogActions>
      )}
    />
  )
}

export default Disclaimer
