import { Box, Button, Typography, useMediaQuery } from '@mui/material'
import { useThemeProvider } from '../../contexts/ThemeContext'
import { Login } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import ImageSlider from '../ImageSlider'

const Hero = () => {
  const { theme } = useThemeProvider()
  const isTablet = useMediaQuery(theme.breakpoints.down('md'))
  const customHeight = {
    ...(isTablet
      ? { sx: { minHeight: '100svh' } }
      : {
          sx: { height: '105svh' }
        })
  }

  return (
    <Box
      component={'section'}
      {...customHeight}
      sx={(theme) => ({
        px: { xs: 1, sm: 4 },
        py: 4,
        minHeight: '100vh',
        willChange: 'opacity',
        height: {
          xs: 'auto',
          md: '100vh'
        }
      })}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          flexDirection: {
            xs: 'column',
            md: 'row'
          }
        }}
      >
        <Box
          sx={{
            flex: 1,
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            border: `1px solid ${theme.palette.primary.main}`
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              display: {
                xs: 'none',
                sm: 'block'
              },
              top: 6,
              left: 6,
              width: '100%',
              height: '100%',
              border: `1px solid ${theme.palette.primary.main}`
            }}
          />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 3,
              p: {
                xs: 3,
                sm: 4
              }
            }}
          >
            <Typography
              component={'h1'}
              variant="h2"
              sx={(theme) => ({
                fontWeight: 'bold',
                textAlign: 'center',
                textTransform: 'uppercase',
                [theme.breakpoints.down('md')]: {
                  fontSize: theme.spacing(4.5)
                }
              })}
            >
              A lifetime of discounts? It's{' '}
              <Box component={'span'} color={'primary.main'}>
                <br />
                Genius
              </Box>
            </Typography>
            <Typography
              component={'h2'}
              variant="h5"
              sx={(theme) => ({
                textAlign: 'center',
                mb: 6,
                maxWidth: { xs: '100%', lg: '80%' },
                [theme.breakpoints.down('md')]: {
                  fontSize: theme.spacing(2.8)
                }
              })}
            >
              Get rewarded for your travels - unlock instant savings of 10% or
              more with a free Booking account
            </Typography>
            <Button
              variant="contained"
              component={Link}
              to="/auth/register"
              startIcon={<Login />}
              role="Button"
              sx={{
                width: {
                  xs: '200px',
                  sm: '300px'
                }
              }}
              size="medium"
            >
              Sign up
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1,
            width: '100%',
            height: '100%',
            border: `1px solid ${theme.palette.primary.main}`
          }}
        >
          <ImageSlider />
        </Box>
      </Box>
    </Box>
  )
}

export default Hero
