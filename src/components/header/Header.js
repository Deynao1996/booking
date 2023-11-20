import { useCallback, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import { Close } from '@mui/icons-material'
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery
} from '@mui/material'
import HeaderDrawer from '../DrawerUI/HeaderDrawer'
import { useThemeProvider } from '../../contexts/ThemeContext'
import HideOnScroll from '../ScrollWrappers/HideOnScroll'
import DesktopNav from '../DesktopNav'
import HeaderActions from './HeaderActions'
import HeaderMarquee from './HeaderMarquee'
import SearchDrawer from '../DrawerUI/SearchDrawer'

const Header = (props) => {
  const { window } = props
  const { theme } = useThemeProvider()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const navRef = useRef()
  const navigate = useNavigate()
  const isTablet = useMediaQuery(theme.breakpoints.down('md'))

  const container = useMemo(
    () => (window !== undefined ? () => window().document.body : undefined),
    [window]
  )

  const handleMobileDrawer = useCallback(
    (state) => setMobileOpen(state),
    [setMobileOpen]
  )

  const handleSearchDrawer = useCallback(
    (state) => setSearchOpen(state),
    [setSearchOpen]
  )

  return (
    <>
      <HideOnScroll disabled={searchOpen}>
        <AppBar
          component="nav"
          position="sticky"
          ref={navRef}
          sx={(theme) => ({
            zIndex: '999',
            width: searchOpen ? '100vw' : '100%',
            backgroundColor:
              theme.palette.mode === 'light'
                ? 'rgba(25, 118, 210, 0.8)'
                : 'rgba(16, 20, 24, 0.8)',
            backdropFilter: 'blur(8px)',
            willChange: 'filter width',
            transition: 'width 0.2s ease-in-out',
            filter: `hue-rotate(${searchOpen ? 190 : 0}deg)`
          })}
        >
          <HeaderMarquee />
          <Toolbar>
            {!isTablet && <DesktopNav />}
            <Box
              sx={{
                flex: 1,
                display: { md: 'none' },
                justifyContent: 'flex-start'
              }}
            >
              <IconButton
                color="inherit"
                aria-label="toggle drawer"
                edge="start"
                onClick={() => handleMobileDrawer((prevState) => !prevState)}
              >
                {mobileOpen ? <Close /> : <MenuIcon />}
              </IconButton>
            </Box>
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Typography
                variant={isTablet ? 'h4' : 'h6'}
                component="span"
                sx={{
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
                onClick={() => navigate('/')}
              >
                {isTablet ? 'B' : 'Booking'}
              </Typography>
            </Box>
            <HeaderActions
              handleSearchDrawer={handleSearchDrawer}
              searchOpen={searchOpen}
            />
          </Toolbar>
          <SearchDrawer
            handleSearchDrawer={handleSearchDrawer}
            searchOpen={searchOpen}
            container={container}
          />
        </AppBar>
      </HideOnScroll>

      {isTablet && (
        <HeaderDrawer
          handleMobileDrawer={handleMobileDrawer}
          container={container}
          mobileOpen={mobileOpen}
        />
      )}
    </>
  )
}

export default Header
