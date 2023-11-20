import { Box, Typography } from '@mui/material'
import Marquee from 'react-fast-marquee'
import { useThemeProvider } from '../../contexts/ThemeContext'
import { Circle } from '@mui/icons-material'
import { useState } from 'react'
import { useEffect } from 'react'

export const HEADER_MARQUEE_HEIGHT = 20

const HeaderMarquee = () => {
  const { theme } = useThemeProvider()

  return (
    <Marquee
      autoFill
      style={{
        backgroundColor: theme.palette.primary.dark,
        height: HEADER_MARQUEE_HEIGHT + 'px'
      }}
      speed={40}
    >
      <Typography
        variant="caption"
        component="span"
        sx={{
          textTransform: 'uppercase',
          color: theme.palette.primary.contrastText,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        Enjoy free shipping and simple returns with every US order
        <Circle sx={{ width: 8, height: 8, mx: 1 }} />
      </Typography>
    </Marquee>
  )
}

export default HeaderMarquee
