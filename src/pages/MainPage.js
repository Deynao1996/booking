import { useNavigate, useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { renderHomes } from '../utils/render-items-utils'
import ItemsList from '../components/Lists/ItemsList'
import { fetchHouses } from '../utils/service-utils'
import {
  Box,
  Button,
  DialogActions,
  DialogContentText,
  Divider,
  Typography
} from '@mui/material'
import ConfirmDialog from '../components/ModalUI/ConfirmDialog'
import { mainPageMsgs } from '../data/messages-data'
import Hero from '../components/Sections/Hero'
import Choices from '../components/Sections/Choices'
import Property from '../components/Sections/Property'
import Stay from '../components/Sections/Stay'
import Collections from '../components/Sections/Collections'

export const CustomContainer = ({ children }) => {
  return <Box sx={{ px: { xs: 1, sm: 4 } }}>{children}</Box>
}

const MainPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false)
  const searchParam = searchParams.get('success')
  const messages = mainPageMsgs

  function resetSearchParams() {
    searchParams.delete('success')
    setSearchParams(searchParams)
    setIsConfirmDialogOpen(false)
  }

  useEffect(() => {
    searchParam && setIsConfirmDialogOpen(true)
  }, [searchParam])

  const confirmText =
    searchParam === 'true' ? messages.paymentComplete : messages.paymentFailed
  const returnBtn = searchParam === 'false' && (
    <Button
      onClick={() => navigate(-1)}
      variant="contained"
      role="Link"
      aria-label="Navigate"
    >
      Return to payment
    </Button>
  )

  return (
    <>
      <ConfirmDialog
        isConfirmDialogOpen={isConfirmDialogOpen}
        onCancel={resetSearchParams}
        title={'Payment info:'}
        renderDialogContent={() => (
          <DialogContentText>{confirmText}</DialogContentText>
        )}
        renderActions={() => (
          <DialogActions>
            <Button aria-label="Reset" onClick={resetSearchParams}>
              Close
            </Button>
            {returnBtn}
          </DialogActions>
        )}
      />
      <Hero />
      <div>
        <Choices />
        <Divider sx={{ my: 4 }} />
        <Property />
        <Stay />
        <Divider sx={{ my: 5, visibility: 'hidden' }} />
        <Collections />
      </div>
    </>
  )
}

export default MainPage
