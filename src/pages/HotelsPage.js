import styled from '@emotion/styled'
import { Close, Sort } from '@mui/icons-material'
import { Box, Fab, Grid, useMediaQuery } from '@mui/material'
import { useState } from 'react'
import AsideSearchPanel from '../components/AsideSearchPanel'
import HotelsList from '../components/Lists/HotelsList'
import MobileSearchDialog from '../components/ModalUI/MobileSearchDialog'
import ZoomOnScroll from '../components/ScrollWrappers/ZoomOnScroll'
import { useThemeProvider } from '../contexts/ThemeContext'

const StyledFab = styled(Fab)(({ theme }) => ({
  position: 'fixed',
  bottom: 16,
  right: 16,
  zIndex: 10
}))

const HotelsPage = () => {
  const { theme } = useThemeProvider()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  function toggleDialog() {
    setIsDialogOpen((isDialogOpen) => !isDialogOpen)
  }

  return (
    <Box
      sx={{
        maxWidth: { xs: '100%', lg: '80%' },
        margin: '0 auto',
        px: { xs: 1, sm: 4 },
        mb: 2
      }}
    >
      <MobileSearchDialog
        toggleDialog={toggleDialog}
        isDialogOpen={isDialogOpen}
      />
      <Grid container component="section" spacing={2} paddingY={2}>
        {!isMobile ? (
          <Grid item xs={3}>
            <AsideSearchPanel />
          </Grid>
        ) : (
          <ZoomOnScroll>
            <StyledFab
              color="info"
              aria-label="search"
              sx={{ position: 'fixed', bottom: 16, right: 16 }}
              onClick={toggleDialog}
            >
              {isDialogOpen ? <Close /> : <Sort />}
            </StyledFab>
          </ZoomOnScroll>
        )}
        <Grid item xs={12} md={9}>
          <HotelsList />
        </Grid>
      </Grid>
    </Box>
  )
}

export default HotelsPage
