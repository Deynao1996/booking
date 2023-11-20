import { Box, Button, Paper, Typography } from '@mui/material'
import { CustomContainer } from '../../pages/MainPage'
import { TitleSquares } from '../TitlesBlock'
import { Search } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { useThemeProvider } from '../../contexts/ThemeContext'

const Stay = () => {
  const { theme } = useThemeProvider()
  return (
    <CustomContainer>
      <Paper
        elevation={8}
        component={'section'}
        sx={{
          position: 'relative',
          height: '100vh',
          px: { xs: 2, md: 10 },
          py: 4,
          overflow: 'hidden'
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '100%'
          }}
        >
          <img
            alt="stay-background"
            data-scroll
            loading="lazy"
            data-scroll-speed="0.1"
            srcSet=" 
                /img/artwork-min.jpg 640w, 
                /img/artwork.jpg 1030w 
            "
            sizes=" 
                (min-width: 1366px) 916px, 
                100vw
            "
            style={{
              objectFit: 'cover',
              width: '120%',
              height: '140%',
              position: 'relative',
              left: '-10%',
              bottom: '10%'
            }}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            height: '100%',
            width: { xs: '100%', md: 'clamp(40%, 500px, 100%)' }
          }}
        >
          <Box
            component={Paper}
            elevation={1}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 3,
              p: 5,
              borderRadius: '0',
              border: `1px solid ${theme.palette.primary.main}`,
              position: 'relative',
              width: '100%'
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
            <TitleSquares />
            <Typography
              variant="h3"
              component="h4"
              sx={(theme) => ({
                fontWeight: 'bold',
                textAlign: 'center',
                textTransform: 'uppercase',
                [theme.breakpoints.down('md')]: {
                  fontSize: theme.spacing(4.5)
                }
              })}
            >
              Find Your
              <br /> Stay
            </Typography>

            <Typography
              variant="h6"
              component="h5"
              sx={(theme) => ({
                textAlign: 'center',
                fontWeight: 'normal',
                mb: 6,
                width: { xs: '100%', sm: '80%' },
                [theme.breakpoints.down('md')]: {
                  fontSize: theme.spacing(2)
                }
              })}
            >
              Explore our diverse accommodations to discover the perfect lodging
            </Typography>
            <Button
              variant="contained"
              component={Link}
              to="/houses"
              endIcon={<Search />}
              sx={{ mt: 1, width: { xs: '100%', sm: '40%', md: '40%' } }}
            >
              Search Now
            </Button>
          </Box>
        </Box>
      </Paper>
    </CustomContainer>
  )
}

export default Stay
