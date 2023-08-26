import { useCallback, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import { Login, PersonAddAlt1 } from '@mui/icons-material'
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery
} from '@mui/material'
import { useAuthProvider } from '../../contexts/AuthContext'
import UserInfo from './UserInfo'
import CustomDrawer from './CustomDrawer'
import SwitchColorTheme from '../SwitchColorTheme'
import { useThemeProvider } from '../../contexts/ThemeContext'
import HideOnScroll from '../ScrollWrappers/HideOnScroll'

const offlineHeaderLinks = [
  {
    label: 'Login',
    to: '/auth/login',
    icon: <Login />,
    withCurrentUser: false
  },
  {
    label: 'Register',
    to: '/auth/register',
    icon: <PersonAddAlt1 />,
    withCurrentUser: false
  }
]

const Header = (props) => {
  const { window } = props
  const { currentUser } = useAuthProvider()
  const { theme } = useThemeProvider()
  const [mobileOpen, setMobileOpen] = useState(false)
  const navigate = useNavigate()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const container = useMemo(
    () => (window !== undefined ? () => window().document.body : undefined),
    [window]
  )

  const handleDrawer = useCallback(
    (state) => setMobileOpen(state),
    [setMobileOpen]
  )

  function renderBarItems() {
    return offlineHeaderLinks.map((item) => (
      <Button
        key={item.label}
        role="Link"
        aria-label="Navigate"
        sx={{ color: '#fff' }}
        onClick={() => navigate(item.to)}
      >
        {item.label}
      </Button>
    ))
  }

  return (
    <>
      <HideOnScroll>
        <AppBar
          component="nav"
          position="sticky"
          sx={(theme) => ({
            zIndex: '999',
            backgroundColor:
              theme.palette.mode === 'light'
                ? 'rgba(25, 118, 210, 0.8)'
                : 'rgba(16, 20, 24, 0.8)',
            backdropFilter: 'blur(8px)'
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={() => handleDrawer(true)}
              sx={{
                mr: 2,
                display: { sm: 'none' },
                justifyContent: 'flex-start'
              }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', sm: 'block' }
              }}
            >
              <Typography
                variant="h6"
                component="span"
                sx={{
                  cursor: 'pointer'
                }}
                onClick={() => navigate('/')}
              >
                Booking
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', ml: 'auto' }}>
              {!isMobile && <SwitchColorTheme />}
              {currentUser ? <UserInfo /> : renderBarItems()}
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      {isMobile && (
        <CustomDrawer
          handleDrawer={handleDrawer}
          container={container}
          mobileOpen={mobileOpen}
        />
      )}
    </>
  )
}

export default Header
