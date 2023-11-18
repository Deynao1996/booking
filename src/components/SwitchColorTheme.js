import { DarkMode, LightMode } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { useThemeProvider } from '../contexts/ThemeContext'

const SwitchColorTheme = ({ variant = 'desktop' }) => {
  const { theme, toggleColorMode } = useThemeProvider()
  const svgParams = {
    ...(variant === 'mobile' && { sx: { width: '32px', height: '32px' } })
  }

  return (
    <IconButton
      aria-label="toggle color mode"
      onClick={toggleColorMode}
      color="inherit"
    >
      {theme.palette.mode === 'dark' ? (
        <LightMode {...svgParams} />
      ) : (
        <DarkMode {...svgParams} />
      )}
    </IconButton>
  )
}

export default SwitchColorTheme
