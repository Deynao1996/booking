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
    <img
      src={imageUrl}
      alt="background-image"
      style={{ objectFit: 'cover', width: '100%', height: '100%' }}
    />
  )
}

export default BackgroundImage
