import { Box, Typography } from '@mui/material'

export const TitleSquares = ({ size = 0.8, borderSize = 1, color }) => {
  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <Box
        sx={(theme) => ({
          width: `${size}rem`,
          height: `${size}rem`,
          transformOrigin: 'center',
          transform: 'rotate(-45deg)',
          border: `${borderSize}px solid ${color || theme.palette.text.primary}`
        })}
      />
      <Box
        sx={(theme) => ({
          width: `${size}rem`,
          height: `${size}rem`,
          transformOrigin: 'center',
          transform: 'rotate(-45deg)',
          border: `${borderSize}px solid ${
            color || theme.palette.text.primary
          }`,
          position: 'relative',
          left: -5
        })}
      />
    </Box>
  )
}

const TitlesBlock = ({ title, subtitle }) => {
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          algnItems: 'center',
          gap: 3
        }}
      >
        <TitleSquares />
        <Typography variant="subtitle1" component="span" textAlign={'center'}>
          {subtitle}
        </Typography>
        <TitleSquares />
      </Box>
      <Typography
        variant="h5"
        component="h3"
        sx={{
          fontWeight: 'bold',
          mb: 8,
          textAlign: 'center',
          textTransform: 'uppercase'
        }}
      >
        {title}
      </Typography>
    </div>
  )
}

export default TitlesBlock
