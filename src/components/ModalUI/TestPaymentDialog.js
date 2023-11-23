import {
  Box,
  Button,
  DialogActions,
  IconButton,
  Stack,
  Tooltip,
  Typography
} from '@mui/material'
import ConfirmDialog from './ConfirmDialog'
import { useCopyToClipboard } from '../../hooks/useCopyToClipboard'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import React from 'react'

const TEST_CARD_NUMBER = '4242 4242 4242 4242'

const TestPaymentDialog = ({
  handlePaymentDialogClose,
  isPaymentDialogOpen
}) => {
  const [value, copy] = useCopyToClipboard()

  return (
    <ConfirmDialog
      isConfirmDialogOpen={isPaymentDialogOpen}
      onCancel={handlePaymentDialogClose}
      title="Test Payment System Information"
      renderDialogContent={() => (
        <>
          <Typography>
            To explore and test the credit card payment system functionality in
            this demo, you can use the following test{' '}
            <span style={{ fontWeight: 'bold' }}>card number</span>:
          </Typography>
          <Box
            sx={{
              mt: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {TEST_CARD_NUMBER}
              <Tooltip
                title={value ? 'Copied!' : 'Copy to clipboard!'}
                enterTouchDelay={0}
              >
                <IconButton
                  size="large"
                  color="inherit"
                  onClick={() => copy(TEST_CARD_NUMBER)}
                >
                  <ContentCopyIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>

          <Typography mt={2}>
            Please note that this is a test card number and does not represent a
            real payment method. It is provided for demonstration purposes only.
          </Typography>
          <Typography mt={2}>
            You can use it to simulate payment transactions and experience the
            payment process in the application. Thank you for participating in
            our demo and exploring the payment system feature.
          </Typography>
        </>
      )}
      renderActions={() => (
        <DialogActions>
          <Button aria-label="Agree" onClick={handlePaymentDialogClose}>
            Confirm
          </Button>
        </DialogActions>
      )}
    />
  )
}

export default React.memo(TestPaymentDialog)
