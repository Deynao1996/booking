import { Box, Typography, useMediaQuery } from '@mui/material'
import { Link } from 'react-router-dom'
import { useThemeProvider } from '../contexts/ThemeContext'

const Logo = () => {
  const { theme } = useThemeProvider()
  const isTablet = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Typography
      component={Link}
      role="link"
      to={'/'}
      sx={{
        cursor: 'pointer',
        fontWeight: 'bold',
        textDecoration: 'none',
        color: 'inherit'
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <img src="/img/logo.svg" alt="logo" />
        <Typography
          component={'span'}
          variant="h6"
          sx={{ fontFamily: 'Oswald', display: { xs: 'none', md: 'block' } }}
        >
          Roomify
        </Typography>
      </Box>
    </Typography>
  )
}

export default Logo
