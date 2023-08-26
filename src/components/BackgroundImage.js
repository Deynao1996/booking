import { Box } from '@mui/material'
import { useThemeProvider } from '../contexts/ThemeContext'
import day from '../assets/img/day.jpg'
import night from '../assets/img/night.jpg'
import { useMemo } from 'react'

const BackgroundImage = () => {
  const { theme } = useThemeProvider()
  const imageUrl = useMemo(
    () => (theme.palette.mode === 'light' ? day : night),
    [theme]
  )

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        margin: 0,
        padding: 0,
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1
      }}
    >
      <img
        src={imageUrl}
        alt="background-image"
        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
      />
    </Box>
  )
}

export default BackgroundImage
