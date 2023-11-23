import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText
} from '@mui/material'
import { Link, useLocation } from 'react-router-dom'
import { navLinks } from '../../data/nav-items-data'
import styled from '@emotion/styled'
import MobileHeaderActions from '../header/MobileHeaderActions'
import Copyright from '../Copyright'
import { useEffect } from 'react'

const HeaderDrawer = ({ handleMobileDrawer, container, mobileOpen }) => {
  const { pathname } = useLocation()

  function renderDrawerItems() {
    return navLinks.map((item) => (
      <ListItem key={item.label} disableGutters>
        <ListItemButton
          component={Link}
          to={item.to}
          onClick={() => handleMobileDrawer(false)}
          disabled={item.isDisabled}
          sx={{
            textAlign: 'start',
            textDecoration:
              pathname === item.to && !item.isDisabled ? 'underline' : 'none'
          }}
        >
          <ListItemText primary={item.label} />
        </ListItemButton>
      </ListItem>
    ))
  }

  const drawer = (
    <Box
      sx={{
        textAlign: 'center',
        px: 5,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <Box sx={{ flex: 1 }}>
        <List sx={{ mt: 10 }}>{renderDrawerItems()}</List>
        <Divider />
        <MobileHeaderActions />
      </Box>
      <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', pb: 5 }}>
        <Copyright mt={'auto'} />
      </Box>
    </Box>
  )

  return (
    <Box component="nav">
      <Drawer
        container={container}
        variant="temporary"
        anchor="top"
        open={mobileOpen}
        onClose={() => handleMobileDrawer(false)}
        sx={{
          zIndex: 900,
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            height: '100svh'
          }
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  )
}

export default HeaderDrawer
